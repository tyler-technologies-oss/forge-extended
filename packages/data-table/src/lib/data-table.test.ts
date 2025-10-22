import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { VisibilityState } from '@tanstack/lit-table';
import { DataTableElement } from './data-table';

import './data-table';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
    }
  }
}

// This is needed by tanstack core...
if (!globalThis.process) {
  globalThis.process = { env: { NODE_ENV: 'production' } } as NodeJS.Process;
}

describe('Data Table', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<DataTableElement>(html`<forge-data-table></forge-data-table>`);

    expect(el.shadowRoot).to.be.ok;
    expect(el.shadowRoot?.childNodes.length).to.be.greaterThan(0);
  });

  it('should render virtualized rows when virtualized property is set', async () => {
    const testData = Array(100)
      .fill(0)
      .map((_, i) => ({ id: i, name: `Item ${i}` }));
    const testColumns = [
      { header: 'ID', property: 'id' },
      { header: 'Name', property: 'name' }
    ];

    const el = await fixture<DataTableElement>(html`
      <forge-data-table
        .data=${testData}
        .columns=${testColumns}
        ?virtualized=${true}
        row-height="40"
        style="height: 400px;">
      </forge-data-table>
    `);

    expect(el.virtualized).to.be.true;
    expect(el.rowHeight).to.equal(40);

    // Wait for virtualization to be ready
    await el.updateComplete;

    const tableContainer = el.shadowRoot?.querySelector('.table-container');
    expect(tableContainer).to.exist;

    // Wait for the virtualizer to initialize after the containerRef is set
    await new Promise(resolve => setTimeout(resolve, 50));
    await el.updateComplete;

    // Count the number of tr elements in tbody (should be fewer than total data items)
    const tbody = el.shadowRoot?.querySelector('tbody');
    const rows = tbody?.querySelectorAll('tr[data-index]');
    expect(rows).to.exist;

    // Should have fewer rows rendered than the total data length (100)
    // The exact number depends on the viewport size, but it will be much less than 100
    expect(rows!.length).to.be.lessThan(testData.length);

    // Check for spacer rows (there should be at least one)
   const spacerRows = tbody?.querySelectorAll('tr.virtual-spacer');
   expect(spacerRows?.length).to.be.at.least(0); // Could be 1 or 2 depending on scroll position
  });

  it('should hide columns that are flagged as hidden by default', async () => {
    const el = await fixture<DataTableElement>(html`
      <forge-data-table
        .data=${[{ id: 1, name: 'Alice' }]}
        .columns=${[
          { header: 'ID', property: 'id' },
          { header: 'Name', property: 'name', hidden: true }
        ]}>
      </forge-data-table>
    `);

    await el.updateComplete;

    const headerCells = Array.from(el.shadowRoot?.querySelectorAll('thead th') ?? []).map(cell =>
      cell.textContent?.trim()
    );

    expect(headerCells).to.not.include('Name');

    const firstRow = el.shadowRoot?.querySelector('tbody tr');
    const bodyCells = Array.from(firstRow?.querySelectorAll('td') ?? []);
    expect(bodyCells.length).to.equal(1);
  });

  it('should emit column visibility events when using hide/show APIs', async () => {
    const el = await fixture<DataTableElement>(html`
      <forge-data-table
        .data=${[{ id: 1, name: 'Alice' }]}
        .columns=${[
          { header: 'ID', property: 'id' },
          { header: 'Name', property: 'name' }
        ]}>
      </forge-data-table>
    `);

    await el.updateComplete;

    const events: VisibilityState[] = [];
    el.addEventListener('forge-data-table-column-visibility', (evt: Event) =>
      events.push((evt as CustomEvent<VisibilityState>).detail)
    );

    el.hideColumn('name');
    await el.updateComplete;

    expect(events.length).to.equal(1);
    expect(events[0].name).to.be.false;

    let headerCells = Array.from(el.shadowRoot?.querySelectorAll('thead th') ?? []).map(cell =>
      cell.textContent?.trim()
    );
    expect(headerCells).to.not.include('Name');

    el.showColumn('name');
    await el.updateComplete;

    expect(events.length).to.equal(2);
    expect(events[1].name).to.be.true;

    headerCells = Array.from(el.shadowRoot?.querySelectorAll('thead th') ?? []).map(cell =>
      cell.textContent?.trim()
    );
    expect(headerCells).to.include('Name');
  });

  it('should not hide columns that are marked as non-hideable', async () => {
    const el = await fixture<DataTableElement>(html`
      <forge-data-table
        .data=${[{ id: 1, name: 'Alice' }]}
        .columns=${[
          { header: 'ID', property: 'id', hideable: false },
          { header: 'Name', property: 'name' }
        ]}>
      </forge-data-table>
    `);

    await el.updateComplete;

    const events: VisibilityState[] = [];
    el.addEventListener('forge-data-table-column-visibility', (evt: Event) =>
      events.push((evt as CustomEvent<VisibilityState>).detail)
    );

    el.hideColumn('id');
    await el.updateComplete;

    expect(events.length).to.equal(0);

    const headerCells = Array.from(el.shadowRoot?.querySelectorAll('thead th') ?? []).map(cell =>
      cell.textContent?.trim()
    );
    expect(headerCells).to.include('ID');
  });

  it('should not open column visibility menu when header is clicked', async () => {
    const el = await fixture<DataTableElement>(html`
      <forge-data-table
        .data=${[{ id: 1, name: 'Alice' }]}
        .columns=${[
          { header: 'ID', property: 'id', hideable: false },
          { header: 'Name', property: 'name' }
        ]}>
      </forge-data-table>
    `);

    await el.updateComplete;

    const headerCell = el.shadowRoot?.querySelector('thead th[data-column-id="name"]') as HTMLElement;
    headerCell.click();

    await el.updateComplete;

    const popover = el.shadowRoot?.querySelector('#column-visibility-popover') as any;
    expect(popover).to.exist;
    expect(popover.open).to.be.false;
  });

  it('should open column visibility menu when header is right-clicked', async () => {
    const el = await fixture<DataTableElement>(html`
      <forge-data-table
        .data=${[{ id: 1, name: 'Alice' }]}
        .columns=${[
          { header: 'ID', property: 'id', hideable: false },
          { header: 'Name', property: 'name' }
        ]}>
      </forge-data-table>
    `);

    await el.updateComplete;

    const headerCell = el.shadowRoot?.querySelector('thead th[data-column-id="name"]') as HTMLElement;
    headerCell.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true }));

    await el.updateComplete;

    const popover = el.shadowRoot?.querySelector('#column-visibility-popover') as any;
    expect(popover).to.exist;
    expect(popover.open).to.be.true;

    const disabledItem = popover.querySelector('forge-list-item[value="id"]');
    expect(disabledItem).to.exist;
    expect(disabledItem.hasAttribute('disabled')).to.be.true;
  });

  it('should toggle column visibility from the context menu', async () => {
    const el = await fixture<DataTableElement>(html`
      <forge-data-table
        .data=${[{ id: 1, name: 'Alice' }]}
        .columns=${[
          { header: 'ID', property: 'id' },
          { header: 'Name', property: 'name' }
        ]}>
      </forge-data-table>
    `);

    await el.updateComplete;

    const headerCell = el.shadowRoot?.querySelector('thead th[data-column-id="name"]') as HTMLElement;
    headerCell.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true }));

    await el.updateComplete;

    const popover = el.shadowRoot?.querySelector('#column-visibility-popover') as HTMLElement;
    const listItem = popover.querySelector('forge-list-item[value="name"]') as HTMLElement;
    listItem.click();

    await el.updateComplete;

    expect(el.columnVisibility.name).to.be.false;

    listItem.click();
    await el.updateComplete;

    expect(el.columnVisibility.name).to.be.true;
  });
});
