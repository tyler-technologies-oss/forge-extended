import type { ColumnDef, DataTableElement, RowSelectionType } from '$lib/data-table';
import { filterModule } from '$lib/features/filter';

import './data-table.scss';

filterModule();

interface RowData {
  id: number;
  name: string;
  age: number;
  birthday: Date;
}

const dataTable = document.querySelector('forge-data-table') as DataTableElement<RowData>;
dataTable.columns = [
  { header: 'Id', property: 'id', filterType: 'number' },
  { header: 'Name', property: 'name' },
  {
    header: 'Age',
    property: 'age',
    filterType: 'range',
    footer: ({ data }) => `Total age: ${data.reduce((acc, row) => acc + row.age, 0)}`
  },
  {
    header: 'Birthday',
    property: 'birthday',
    transform: row => row.birthday.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }
];
dataTable.data = [
  { id: 1, name: 'Alice', age: 25, birthday: new Date(1996, 1, 14) },
  { id: 2, name: 'Bob', age: 30, birthday: new Date(1991, 5, 7) },
  { id: 3, name: 'Charlie', age: 35, birthday: new Date(1986, 2, 1) },
  { id: 4, name: 'David', age: 40, birthday: new Date(1981, 9, 4) },
  { id: 5, name: 'Eve', age: 45, birthday: new Date(1976, 11, 17) }
];

dataTable.addEventListener('forge-data-table-sort', console.log);
dataTable.addEventListener('forge-data-table-filter', console.log);
dataTable.addEventListener('forge-data-table-column-order', console.log);
dataTable.addEventListener('forge-data-table-row-click', console.log);
dataTable.addEventListener('forge-data-table-column-visibility', console.log);

const resizableCheckbox = document.getElementById('resizable') as HTMLInputElement;
resizableCheckbox.addEventListener('change', () => (dataTable.resizable = resizableCheckbox.checked));

const reorderableCheckbox = document.getElementById('reorderable') as HTMLInputElement;
reorderableCheckbox.addEventListener('change', () => (dataTable.reorderable = reorderableCheckbox.checked));

const hoverCheckbox = document.getElementById('hover') as HTMLInputElement;
hoverCheckbox.addEventListener('change', () => (dataTable.hover = hoverCheckbox.checked));

const stripedCheckbox = document.getElementById('striped') as HTMLInputElement;
stripedCheckbox.addEventListener('change', () => (dataTable.striped = stripedCheckbox.checked));

const compactCheckbox = document.getElementById('compact') as HTMLInputElement;
compactCheckbox.addEventListener('change', () => (dataTable.compact = compactCheckbox.checked));

const borderedCheckbox = document.getElementById('bordered') as HTMLInputElement;
borderedCheckbox.addEventListener('change', () => (dataTable.bordered = borderedCheckbox.checked));

const allowRowClickCheckbox = document.getElementById('allow-row-click') as HTMLInputElement;
allowRowClickCheckbox.addEventListener('change', () => (dataTable.allowRowClick = allowRowClickCheckbox.checked));

const customCellTemplateCheckbox = document.getElementById('custom-cell-template') as HTMLInputElement;
customCellTemplateCheckbox.addEventListener('change', () => {
  const birthdayColumn = dataTable.columns.find(column => column.property === 'birthday') as ColumnDef;
  if (customCellTemplateCheckbox.checked) {
    birthdayColumn.template = ({ cell }) => {
      const div = document.createElement('div');
      div.setAttribute('part', 'cell');
      div.textContent = `Custom: ${cell.getValue()}`;
      div.style.color = 'red';
      return div;
    };
    birthdayColumn.useTemplateSlot = true;
    birthdayColumn.stopRowClickPropagation = true;
  } else {
    delete birthdayColumn.template;
    delete birthdayColumn.useTemplateSlot;
    delete birthdayColumn.stopRowClickPropagation;
  }
  dataTable.columns = [...dataTable.columns];
});

const rowSelectionSelect = document.getElementById('row-select') as HTMLSelectElement;
rowSelectionSelect.addEventListener(
  'change',
  () => (dataTable.rowSelection = rowSelectionSelect.value as RowSelectionType)
);

const sortableCheckbox = document.getElementById('sortable') as HTMLInputElement;
sortableCheckbox.addEventListener('change', () => (dataTable.sortable = sortableCheckbox.checked));

const manualSortCheckbox = document.getElementById('manual-sort') as HTMLInputElement;
manualSortCheckbox.addEventListener('change', () => (dataTable.manualSort = manualSortCheckbox.checked));

const filterableCheckbox = document.getElementById('filterable') as HTMLInputElement;
filterableCheckbox.addEventListener('change', () => (dataTable.filterable = filterableCheckbox.checked));

const manualFilterCheckbox = document.getElementById('manual-filter') as HTMLInputElement;
manualFilterCheckbox.addEventListener('change', () => (dataTable.manualFilter = manualFilterCheckbox.checked));

const hiddenColumnsSelect = document.getElementById('hidden-columns') as HTMLSelectElement;
hiddenColumnsSelect.innerHTML = [{ header: '' }, ...dataTable.columns].reduce(
  (acc, { header, id }) => `${acc}<option value="${id ?? header?.toString().toLowerCase()}">${header}</option>`,
  ''
);
hiddenColumnsSelect.addEventListener('change', () => {
  const hiddenColumns = new Set(
    Array.from(hiddenColumnsSelect.selectedOptions)
      .map(option => option.value)
      .filter(Boolean)
  );

  dataTable.columns.forEach(column => {
    const columnId = column.id ?? column.header?.toString().toLowerCase();
    if (!columnId) {
      return;
    }

    if (hiddenColumns.has(columnId)) {
      dataTable.hideColumn(columnId);
    } else {
      dataTable.showColumn(columnId);
    }
  });
});
