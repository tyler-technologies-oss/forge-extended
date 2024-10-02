import type { DataTableElement } from './src/lib/data-table';
import { filterModule } from './src/lib/features/filter';

filterModule();

interface RowData {
  id: number;
  name: string;
  age: number;
}

const dataTable = document.querySelector('forge-data-table') as DataTableElement<RowData>;
dataTable.columns = [
  { header: 'Id', accessorKey: 'id', meta: { filterVariant: 'select' } },
  { header: 'Name', accessorKey: 'name' },
  { header: 'Age', accessorKey: 'age' }
];
dataTable.data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 40 },
  { id: 5, name: 'Eve', age: 45 }
];

dataTable.addEventListener('forge-data-table-sort', console.log);
dataTable.addEventListener('forge-data-table-filter', console.log);

const resizableCheckbox = document.getElementById('resizable') as HTMLInputElement;
resizableCheckbox.addEventListener('change', () => (dataTable.resizable = resizableCheckbox.checked));

// const reorderableCheckbox = document.getElementById('reorderable') as HTMLInputElement;
// reorderableCheckbox.addEventListener('change', () => (dataTable.reorderable = reorderableCheckbox.checked));

const stripedCheckbox = document.getElementById('striped') as HTMLInputElement;
stripedCheckbox.addEventListener('change', () => (dataTable.striped = stripedCheckbox.checked));

const rowSelectCheckbox = document.getElementById('row-select') as HTMLInputElement;
rowSelectCheckbox.addEventListener('change', () => (dataTable.rowSelection = rowSelectCheckbox.checked));

const sortableCheckbox = document.getElementById('sortable') as HTMLInputElement;
sortableCheckbox.addEventListener('change', () => (dataTable.sortable = sortableCheckbox.checked));

const manualSortCheckbox = document.getElementById('manual-sort') as HTMLInputElement;
manualSortCheckbox.addEventListener('change', () => (dataTable.manualSort = manualSortCheckbox.checked));

const filterableCheckbox = document.getElementById('filterable') as HTMLInputElement;
filterableCheckbox.addEventListener('change', () => (dataTable.filterable = filterableCheckbox.checked));

const manualFilterCheckbox = document.getElementById('manual-filter') as HTMLInputElement;
manualFilterCheckbox.addEventListener('change', () => (dataTable.manualFilter = manualFilterCheckbox.checked));
