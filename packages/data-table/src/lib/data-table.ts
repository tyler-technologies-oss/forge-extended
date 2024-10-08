import {
  Column,
  ColumnDef as TanstackColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  TableController,
  Updater,
  VisibilityState,
  RowData as TanstackRowData,
  Cell,
  Table
} from '@tanstack/lit-table';
import { html, LitElement, nothing, PropertyValues, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { guard } from 'lit/directives/guard.js';
import { styleMap } from 'lit/directives/style-map.js';
import { svg } from 'lit/static-html.js';
import { defineCheckboxComponent, defineDatePickerComponent, defineTooltipComponent } from '@tylertech/forge';
import { lightDomRender } from './directives/light-dom-render';
import { ColumnReorderController } from './controllers/column-reorder-controller';

import styles from './data-table.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-data-table': DataTableElement<unknown>;
  }
}

declare module '@tanstack/lit-table' {
  interface ColumnMeta<TData extends TanstackRowData, TValue> extends ColumnDefMeta {}
}

export type FilterType = 'text' | 'number' | 'range' | 'select' | 'date' | 'date-range' | 'time';

interface ColumnDefMeta {
  filterVariant?: FilterType;
  cellSlot?: boolean;
  stopRowClickPropagation?: boolean;
}

export type Row = unknown | object | any[];

export type RowSelectionType = 'off' | 'single' | 'multiple';

export type FooterCallback = <TData extends Row>(props: { property: string; data: TData[] }) => string;

export interface ColumnDef<TData extends Row = any> {
  id?: string;
  header?: string;
  footer?: string | FooterCallback;
  property?: string & keyof TData;
  transform?: (row: TData, index: number) => any;
  template?:
    | string
    | (<TValue>(props: { row: Row; column: Column<TData>; cell: Cell<TData, TValue> }) => string | HTMLElement);
  useTemplateSlot?: boolean;
  filterType?: FilterType;
  stopRowClickPropagation?: boolean;
}

const SELECT_COLUMN_ID = 'SELECT_COLUMN_ID';

@customElement('forge-data-table')
export class DataTableElement<TData extends Row> extends LitElement {
  static {
    defineCheckboxComponent();
    defineDatePickerComponent();
    defineTooltipComponent();
  }

  private _tableController = new TableController<TData>(this);
  private _columnReorderController: ColumnReorderController<TData> | null = null;

  public static override styles = unsafeCSS(styles);

  @property() data: TData[] = [];
  @property() columns: ColumnDef<TData>[] = [];
  @property() columnVisibility: VisibilityState = {};
  @property() columnOrder: ColumnOrderState = [];
  @property({ type: Boolean, reflect: true }) resizable = false;
  @property({ type: Boolean, reflect: true }) sortable = false;
  @property({ type: Boolean, reflect: true }) filterable = false;
  @property({ type: Boolean, reflect: true, attribute: 'manual-sort' }) manualSort = false;
  @property({ type: Boolean, reflect: true, attribute: 'manual-filter' }) manualFilter = false;
  @property({ type: Boolean, reflect: true }) striped = false;
  @property({ type: Boolean, reflect: true }) hover = false;
  @property({ type: Boolean, reflect: true }) compact = false;
  @property({ type: Boolean, reflect: true }) bordered = false;
  @property({ reflect: true, attribute: 'row-selection' }) rowSelection: RowSelectionType = 'off';
  @property({ type: Boolean, reflect: true }) reorderable = false;
  @property({ type: Boolean, reflect: true, attribute: 'allow-row-click' }) allowRowClick = false;
  @property({ type: Boolean, reflect: true }) expandable = false;

  @state() private _columns: TanstackColumnDef<TData>[] = [];
  @state() private _sorting: SortingState = [];
  @state() private _columnFilters: ColumnFiltersState = [];
  @state() private _rowSelection: Record<string, boolean> = {};

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    // We need to map the columns to the table-core format when the columns property changes
    if (changedProperties.has('columns')) {
      this._mapColumnState();

      // Check to see if any columns are using slotted cell rendering and remove any light DOM content
      // that was previously rendered for those columns if a column is no longer using slotted cells.
      this.columns.forEach(column => {
        if (!column.useTemplateSlot) {
          this.querySelectorAll(`[slot^="col-${column.id ?? column.header?.toLowerCase()}:"]`).forEach(el =>
            el.remove()
          );
        }
      });
    }

    // We need to recreate the table controller when certain properties change to ensure the
    // internal TanStack table state reflects the new component state.
    if (
      changedProperties.has('columns') ||
      changedProperties.has('sortable') ||
      changedProperties.has('manualSort') ||
      changedProperties.has('filterable') ||
      changedProperties.has('manualFilter') ||
      changedProperties.has('rowSelection')
    ) {
      this.removeController(this._tableController);
      this._tableController = new TableController<TData>(this);
    }

    // We need to update the column order when the reorderable or rowSelection properties change
    if (changedProperties.has('reorderable') || changedProperties.has('rowSelection')) {
      this._setReorderable();
    }
  }

  protected render() {
    const renderColumns = [...this._columns];

    if (this.rowSelection !== 'off') {
      this._appendSelectColumn(renderColumns);
    }

    // Update the table controller with the current state
    const table = this._tableController.table({
      columns: renderColumns,
      data: this.data,
      columnResizeMode: 'onChange',
      enableSorting: this.sortable,
      manualSorting: this.manualSort,
      onSortingChange: this._onSort.bind(this),
      enableColumnFilters: this.filterable,
      manualFiltering: this.manualFilter,
      onColumnFiltersChange: this._onFilter.bind(this),
      enableRowSelection: this.rowSelection !== 'off',
      enableMultiRowSelection: this.rowSelection === 'multiple',
      onRowSelectionChange: this._onRowSelect.bind(this),
      onColumnVisibilityChange: this._onColumnVisibilityChange.bind(this),
      onColumnOrderChange: this.onColumnOrderChange.bind(this),
      getRowCanExpand: () => this.expandable,
      state: {
        sorting: this._sorting,
        columnFilters: this._columnFilters,
        columnVisibility: this.columnVisibility,
        columnOrder: this.columnOrder,
        rowSelection: this._rowSelection
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel()
    });

    return html`
      <table>
        <thead>
          ${this._renderTableHeader(table)}
        </thead>
        <tbody>
          ${this._renderTableBody(table)}
        </tbody>
        ${this._renderTableFooter(table)}
      </table>
    `;
  }

  private _renderTableHeader(table: Table<TData>): TemplateResult {
    return html`${table.getHeaderGroups().map(headerGroup => {
      return html`
        <tr part="head-tr tr">
          ${headerGroup.headers.map(header => {
            const canReorder =
              this.reorderable &&
              header.column.columnDef.id !== SELECT_COLUMN_ID &&
              !header.column.columns.length &&
              !!header.column.columnDef.header?.length;
            return html`
              <th
                part="head-cell cell"
                colspan=${header.colSpan > 1 ? header.colSpan : nothing}
                style=${styleMap({ width: this.resizable ? `${header.getSize()}px` : null })}
                class=${classMap({
                  'sort-asc': header.column.getIsSorted() === 'asc',
                  'sort-desc': header.column.getIsSorted() === 'desc',
                  'select-column': this.rowSelection && header.column.columnDef.id === SELECT_COLUMN_ID,
                  'drag-over':
                    canReorder &&
                    this._columnReorderController?.targetColumn === header.column.id &&
                    this._columnReorderController?.movingColumn !== this._columnReorderController?.targetColumn
                })}
                @dragover=${canReorder
                  ? (evt: DragEvent) => this._columnReorderController?.onDragOver(evt, header.column)
                  : nothing}
                @drop=${canReorder
                  ? (evt: DragEvent) => this._columnReorderController?.onDrop(evt, header.column)
                  : nothing}>
                <div class="cell-container" part="head-cell-container">
                  ${canReorder
                    ? html`<div
                        draggable=${canReorder ? 'true' : nothing}
                        @dragstart=${canReorder
                          ? (evt: DragEvent) => this._columnReorderController?.onDragStart(evt, header.column)
                          : nothing}
                        @dragend=${canReorder
                          ? (evt: DragEvent) => this._columnReorderController?.onDragEnd(evt)
                          : nothing}
                        class="reorder-handle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
                        </svg>
                      </div>`
                    : nothing}
                  <div
                    part="head-cell-content cell-content"
                    class="cell-content"
                    style=${styleMap({
                      cursor: this.sortable ? (header.column.getCanSort() ? 'pointer' : 'default') : null
                    })}
                    @click=${this.sortable ? header.column.getToggleSortingHandler() : null}>
                    ${header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    ${this.sortable && header.column.getIsSorted()
                      ? svg`<svg class="sort-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`
                      : null}
                  </div>
                </div>
                ${this.filterable && header.column.getCanFilter()
                  ? html`<div class="filter-container">${this._getFilterField(header.column)}</div>`
                  : nothing}
                ${this.resizable && header.column.getCanResize()
                  ? html`<div
                    @doubleclick=${() => header.column.resetSize()}
                    @mousedown=${header.getResizeHandler()}
                    @touchstart=${header.getResizeHandler()}
                    class=${classMap({ resizer: true, [table.options.columnResizeDirection ?? 'ltr']: true, resizing: header.column.getIsResizing() })}
                  </div>`
                  : nothing}
              </th>
            `;
          })}
        </tr>
      `;
    })}`;
  }

  private _renderTableBody(table: Table<TData>): TemplateResult {
    return html`${repeat(
      table.getRowModel().rows,
      row => row.id,
      row => html`
        <tr
          class=${classMap({ selected: row.getIsSelected() })}
          part="body-tr tr"
          @click=${this.allowRowClick ? (evt: MouseEvent) => this._onRowClick(evt, row.index, row.original) : nothing}>
          ${row.getVisibleCells().map(
            cell => html`
              <td
                part="body-cell cell"
                style=${styleMap({ width: this.resizable ? `${cell.column.getSize()}px` : null })}
                class=${classMap({
                  'select-column': this.rowSelection && cell.column.columnDef.id === SELECT_COLUMN_ID
                })}
                id=${cell.column.id}
                ?data-forge-stop-row-click-propagation=${cell.column.columnDef.meta?.stopRowClickPropagation ||
                cell.column.columnDef.id === SELECT_COLUMN_ID}>
                <div class="cell-content" part="body-cell-content cell-content">
                  ${cell.column.columnDef.meta?.cellSlot
                    ? guard(
                        [cell.column],
                        () =>
                          html`<slot
                            ${lightDomRender(this, cell)}
                            name=${`col-${cell.column.id}:row-${row.id}`}></slot>`
                      )
                    : flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              </td>
            `
          )}
        </tr>
        ${row.getIsExpanded()
          ? html`
              <tr part="body-tr tr">
                <td colspan=${row.getAllCells().length}>
                  <div class="expanded-content">
                    Expandable content
                    <slot name=${`expanded:row-${row.id}`}></slot>
                  </div>
                </td>
              </tr>
            `
          : nothing}
      `
    )}`;
  }

  private _renderTableFooter(table: Table<TData>): TemplateResult | typeof nothing {
    const hasFooterGroups = table
      .getFooterGroups()
      .flatMap(footerGroup => footerGroup.headers.flatMap(header => header.column.columnDef.footer))
      .some(footer => footer !== undefined);

    if (!hasFooterGroups) {
      return nothing;
    }

    return html`<tfoot>
      ${table.getFooterGroups().map(footerGroup => {
        return html`
          <tr part="tfoot-tr tr">
            ${footerGroup.headers.map(
              header => html`
                <th
                  part="tfoot-cell cell"
                  colspan=${header.colSpan > 1 ? header.colSpan : null}
                  style=${styleMap({ width: this.resizable ? `${header.getSize()}px` : null })}>
                  <div class="cell-content" part="footer-cell-content cell-content">
                    ${flexRender(header.column.columnDef.footer, header.getContext())}
                  </div>
                </th>
              `
            )}
          </tr>
        `;
      })}
    </tfoot>`;
  }

  private _mapColumnState(): void {
    this._columns = this.columns.map(column => {
      const mappedColumn: TanstackColumnDef<TData> = {
        id: column.id ?? column.header!.toString().toLowerCase(),
        header: column.header,
        footer:
          typeof column.footer === 'function'
            ? ({ column: { id } }) => (column.footer as FooterCallback)({ property: id, data: this.data })
            : column.footer,
        accessorKey: column.property,
        accessorFn: column.transform,
        meta: {
          cellSlot: column.useTemplateSlot,
          filterVariant: column.filterType,
          stopRowClickPropagation: column.stopRowClickPropagation
        }
      };

      if (typeof column.template === 'function') {
        mappedColumn.cell = column.template;
      }

      return mappedColumn;
    });
  }

  private _appendSelectColumn(columns: TanstackColumnDef<TData>[]): void {
    if (columns.some(column => column.id === SELECT_COLUMN_ID)) {
      return;
    }

    columns.unshift({
      id: SELECT_COLUMN_ID,
      enableResizing: false,
      enableColumnFilter: false,
      enableSorting: false,
      enableHiding: false,
      header:
        this.rowSelection === 'multiple'
          ? ({ table }) =>
              html`<forge-checkbox
                  @change="${table.getToggleAllRowsSelectedHandler()}"
                  .checked="${table.getIsAllRowsSelected()}"
                  .indeterminate="${table.getIsSomeRowsSelected()}"></forge-checkbox>
                <forge-tooltip>Toggle all rows</forge-tooltip>`
          : undefined,
      cell: ({ row }) => html`
        <forge-checkbox
          @change="${row.getToggleSelectedHandler()}"
          .checked="${row.getIsSelected()}"
          ?disabled="${!row.getCanSelect()}"
          .indeterminate="${row.getIsSomeSelected()}"></forge-checkbox>
        <forge-tooltip>Select row</forge-tooltip>
      `
    });
  }

  private _setReorderable(): void {
    if (this.reorderable) {
      this._columnReorderController = new ColumnReorderController(this, {
        onColumnOrderChange: this.onColumnOrderChange.bind(this)
      });
      this.addController(this._columnReorderController);

      const columns = this.columns.map(column => column.id ?? column.header!.toString().toLowerCase());

      if (this.rowSelection !== 'off') {
        this._columnReorderController.ensureSelectColumnOrder(columns);
      }

      this.columnOrder = columns;
    } else {
      if (this._columnReorderController) {
        this.removeController(this._columnReorderController);
      }
      this.columnOrder = [];
    }
  }

  private _onSort(updaterOrValue: Updater<SortingState>): void {
    this._sorting = typeof updaterOrValue === 'function' ? updaterOrValue(this._sorting) : updaterOrValue;
    if (this.manualSort) {
      this.dispatchEvent(
        new CustomEvent('forge-data-table-sort', { detail: this._sorting, bubbles: true, composed: true })
      );
    }
  }

  private _onFilter(updaterOrValue: Updater<ColumnFiltersState>): void {
    this._columnFilters = typeof updaterOrValue === 'function' ? updaterOrValue(this._columnFilters) : updaterOrValue;
    if (this.manualFilter) {
      this.dispatchEvent(
        new CustomEvent('forge-data-table-filter', { detail: this._columnFilters, bubbles: true, composed: true })
      );
    }
  }

  private _onRowSelect(updaterOrValue: Updater<Record<string, boolean>>): void {
    this._rowSelection = typeof updaterOrValue === 'function' ? updaterOrValue(this._rowSelection) : updaterOrValue;
    this.dispatchEvent(
      new CustomEvent('forge-data-table-row-select', { detail: this._rowSelection, bubbles: true, composed: true })
    );
  }

  private _onColumnVisibilityChange(updaterOrValue: Updater<VisibilityState>): void {
    this.columnVisibility =
      typeof updaterOrValue === 'function' ? updaterOrValue(this.columnVisibility) : updaterOrValue;
  }

  public onColumnOrderChange(updaterOrValue: Updater<ColumnOrderState>): void {
    this.columnOrder = typeof updaterOrValue === 'function' ? updaterOrValue(this.columnOrder) : updaterOrValue;
    this.dispatchEvent(
      new CustomEvent('forge-data-table-column-order', { detail: this.columnOrder, bubbles: true, composed: true })
    );
  }

  public _onRowClick(evt: MouseEvent, index: number, data: TData): void {
    const isProtectedCell = evt
      .composedPath()
      .filter(el => (el as Node).nodeType === Node.ELEMENT_NODE)
      .some(el =>
        (el as Element).matches(`:where([id="${SELECT_COLUMN_ID}"],[data-forge-stop-row-click-propagation])`)
      );
    if (isProtectedCell) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent('forge-data-table-row-click', {
        detail: { data, index },
        bubbles: true,
        composed: true
      })
    );
  }

  private _getFilterField(column: Column<TData, unknown>): TemplateResult {
    switch (column.columnDef.meta?.filterVariant) {
      case 'select':
        return this._getSelectFilter(column);
      case 'range':
        return this._getRangeFilter(column);
      case 'date':
        return this._getDateFilter(column);
      default:
        return this._getTextFilter(column);
    }
  }

  private _getSelectFilter(column: Column<TData, unknown>): TemplateResult {
    return html`<forge-select
      density="small"
      .value=${column.getFilterValue() ?? ''}
      @change=${(evt: Event) => column.setFilterValue((evt.target as HTMLSelectElement).value)}>
      <forge-option value="">All</forge-option>
      <forge-option value="1">One</forge-option>
      <forge-option value="2">Two</forge-option>
    </forge-select>`;
  }

  private _getRangeFilter(column: Column<TData, unknown>): TemplateResult {
    return html` <div class="range-filter-container">
      <forge-text-field density="small">
        <input
          type="number"
          value=${(column.getFilterValue() as [number, number])?.[0] ?? ''}
          @input=${(evt: InputEvent) =>
            column.setFilterValue((old: [number, number]) => [
              parseInt((evt.target as HTMLInputElement).value, 10),
              old?.[1]
            ])} />
      </forge-text-field>
      <forge-text-field density="small">
        <input
          type="number"
          value=${(column.getFilterValue() as [number, number])?.[1] ?? ''}
          @input=${(evt: InputEvent) =>
            column.setFilterValue((old: [number, number]) => [
              old?.[0],
              parseInt((evt.target as HTMLInputElement).value, 10)
            ])} />
      </forge-text-field>
    </div>`;
  }

  private _getDateFilter(column: Column<TData, unknown>): TemplateResult {
    return html` <forge-date-picker
      @forge-date-picker-change=${(evt: CustomEvent<Date>) => column.setFilterValue(evt.detail)}
      .value=${column.getFilterValue() as Date}>
      <forge-text-field density="small">
        <input type="text" />
      </forge-text-field>
    </forge-date-picker>`;
  }

  private _getTextFilter(column: Column<TData, unknown>): TemplateResult {
    return html` <forge-text-field density="small">
      <input
        .type=${column.columnDef.meta?.filterVariant ?? 'text'}
        .value=${column.getFilterValue() ?? ''}
        @input=${(evt: InputEvent) => column.setFilterValue((evt.target as HTMLInputElement).value)} />
    </forge-text-field>`;
  }
}
