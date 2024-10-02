import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  RowData,
  RowModel,
  SortingState,
  TableController,
  Updater,
  VisibilityState
} from '@tanstack/lit-table';
import { html, LitElement, nothing, PropertyValues, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { svg } from 'lit/static-html.js';

import styles from './data-table.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-data-table': DataTableElement<unknown>;
  }
}

declare module '@tanstack/lit-table' {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'number' | 'range' | 'select' | 'date' | 'date-range' | 'time';
  }
}

export interface Feature<TData extends RowData = RowData> {
  rowModel: RowModel<TData>;
  onChange: (updater: Updater<RowModel<TData>>) => void;
  state: RowModel<TData>;
}

@customElement('forge-data-table')
export class DataTableElement<TData extends RowData> extends LitElement {
  private _tableController = new TableController<TData>(this);

  public static override styles = unsafeCSS(styles);

  @property() features: Feature[] = [];
  @property() data: TData[] = [];
  @property() columns: ColumnDef<TData, any>[] = [];
  @property() columnVisibility: VisibilityState = {};
  @property({ type: Boolean, reflect: true }) resizable = false;
  @property({ type: Boolean, reflect: true }) sortable = false;
  @property({ type: Boolean, reflect: true }) filterable = false;
  @property({ type: Boolean, reflect: true, attribute: 'manual-sort' }) manualSort = false;
  @property({ type: Boolean, reflect: true, attribute: 'manual-filter' }) manualFilter = false;
  @property({ type: Boolean, reflect: true }) striped = false;
  @property({ type: Boolean, reflect: true, attribute: 'row-selection' }) rowSelection = false;

  @state() private _sorting: SortingState = [];
  @state() private _columnFilters: ColumnFiltersState = [];
  @state() private _rowSelection: Record<string, boolean> = {};

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    // We need to recreate the table controller when certain properties change to ensure the
    // table state reflects the new component state.
    if (
      changedProperties.has('sortable') ||
      changedProperties.has('manualSort') ||
      changedProperties.has('filterable') ||
      changedProperties.has('manualFilter') ||
      changedProperties.has('rowSelection')
    ) {
      this._tableController = new TableController<TData>(this);
    }
  }

  protected render() {
    const columns = [...this.columns];

    if (this.rowSelection) {
      columns.unshift({
        id: '$$select',
        enableResizing: false,
        enableColumnFilter: false,
        enableSorting: false,
        header: ({ table }) =>
          html`<input
            type="checkbox"
            @change="${table.getToggleAllRowsSelectedHandler()}"
            .checked="${table.getIsAllRowsSelected()}"
            .indeterminate="${table.getIsSomeRowsSelected()}" />`,
        cell: ({ row }) => html`
          <input
            type="checkbox"
            @change="${row.getToggleSelectedHandler()}"
            .checked="${row.getIsSelected()}"
            ?disabled="${!row.getCanSelect()}"
            .indeterminate="${row.getIsSomeSelected()}" />
        `
      });
    }

    const table = this._tableController.table({
      columns: columns,
      data: this.data,
      columnResizeMode: 'onChange',
      enableSorting: this.sortable,
      manualSorting: this.manualSort,
      onSortingChange: this._onSort.bind(this),
      enableColumnFilters: this.filterable,
      manualFiltering: this.manualFilter,
      onColumnFiltersChange: this._onFilter.bind(this),
      enableRowSelection: this.rowSelection,
      onRowSelectionChange: this._onRowSelect.bind(this),
      state: {
        sorting: this._sorting,
        columnFilters: this._columnFilters,
        columnVisibility: this.columnVisibility,
        rowSelection: this._rowSelection
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel()
    });

    const sortIcon = svg`<svg class="sort-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;

    return html`
      <table>
        <thead>
          ${table.getHeaderGroups().map(headerGroup => {
            return html`
              <tr>
                ${headerGroup.headers.map(
                  header => html`
                    <th
                      colspan=${header.colSpan > 1 ? header.colSpan : null}
                      style=${styleMap({ width: this.resizable ? `${header.getSize()}px` : null })}
                      class=${classMap({
                        'sort-asc': header.column.getIsSorted() === 'asc',
                        'sort-desc': header.column.getIsSorted() === 'desc',
                        'select-column': this.rowSelection && header.column.columnDef.id === '$$select'
                      })}>
                      <div
                        class="cell-content"
                        style=${styleMap({
                          cursor: this.sortable ? (header.column.getCanSort() ? 'pointer' : 'default') : null
                        })}
                        @click=${this.sortable ? header.column.getToggleSortingHandler() : null}>
                        ${header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        ${this.sortable && header.column.getIsSorted() ? sortIcon : null}
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
                  `
                )}
              </tr>
            `;
          })}
        </thead>
        <tbody>
          ${repeat(
            table.getRowModel().rows,
            row => row.id,
            row => html`
              <tr class=${classMap({ selected: row.getIsSelected() })}>
                ${row.getVisibleCells().map(
                  cell => html`
                    <td
                      style=${styleMap({ width: this.resizable ? `${cell.column.getSize()}px` : null })}
                      class=${classMap({
                        'select-column': this.rowSelection && cell.column.columnDef.id === '$$select'
                      })}>
                      <div class="cell-content">${flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
                    </td>
                  `
                )}
              </tr>
            `
          )}
        </tbody>
        <tfoot>
          ${table.getFooterGroups().map(footerGroup => {
            return html`
              <tr>
                ${footerGroup.headers.map(
                  header => html`
                    <th
                      colspan=${header.colSpan > 1 ? header.colSpan : null}
                      style=${styleMap({ width: this.resizable ? `${header.getSize()}px` : null })}>
                      ${flexRender(header.column.columnDef.footer, header.getContext())}
                    </th>
                  `
                )}
              </tr>
            `;
          })}
        </tfoot>
      </table>
    `;
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

  private _getFilterField(column: Column<TData, unknown>): TemplateResult {
    switch (column.columnDef.meta?.filterVariant) {
      case 'select':
        return html`<forge-select
          density="small"
          .value=${column.getFilterValue() ?? ''}
          @change=${(evt: Event) => column.setFilterValue((evt.target as HTMLSelectElement).value)}>
          <forge-option value="">All</forge-option>
          <forge-option value="1">One</forge-option>
          <forge-option value="2">Two</forge-option>
        </forge-select>`;
      default:
        return html` <forge-text-field density="small">
          <input
            .type=${column.columnDef.meta?.filterVariant ?? 'text'}
            .value=${column.getFilterValue() ?? ''}
            @input=${(evt: InputEvent) => column.setFilterValue((evt.target as HTMLInputElement).value)} />
        </forge-text-field>`;
    }
  }
}
