import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import {
  defineTableComponent,
  defineIconButtonComponent,
  defineIconComponent,
  definePaginatorComponent,
  defineButtonComponent,
  IconRegistry,
  defineStackComponent
} from '@tylertech/forge';
import { tylIconFilter, tylIconRefresh, tylIconDownload } from '@tylertech/tyler-icons';

import '$lib/structured-card';

defineTableComponent();
defineIconButtonComponent();
defineIconComponent();
definePaginatorComponent();
defineButtonComponent();
defineStackComponent();
IconRegistry.define([tylIconFilter, tylIconRefresh, tylIconDownload]);

const component = 'forge-structured-card';

const meta = {
  title: 'Components/Structured Card',
  component,

  render: () => {
    const tableData = [
      { id: 'AST-001', name: 'Dell Latitude 5520', category: 'Laptop', location: 'Building A', status: 'In Use' },
      { id: 'AST-002', name: 'HP LaserJet Pro', category: 'Printer', location: 'Building B', status: 'Available' },
      { id: 'AST-003', name: 'Cisco IP Phone 8845', category: 'Phone', location: 'Building A', status: 'In Use' },
      { id: 'AST-004', name: 'Samsung 27" Monitor', category: 'Monitor', location: 'Building C', status: 'In Repair' },
      { id: 'AST-005', name: 'Logitech MX Keys', category: 'Keyboard', location: 'Building A', status: 'Available' }
    ];

    const columnConfigurations = [
      { property: 'id', header: 'Asset ID' },
      { property: 'name', header: 'Asset Name' },
      { property: 'category', header: 'Category' },
      { property: 'location', header: 'Location' },
      { property: 'status', header: 'Status' }
    ];

    return html`
      <forge-structured-card heading-level="2" body-spacing="none">
        <div slot="title">Asset Inventory</div>
        <forge-icon-button aria-label="Refresh data" slot="after-header-actions">
          <forge-icon name="refresh"></forge-icon>
        </forge-icon-button>
        <forge-icon-button aria-label="Download report" slot="after-header-actions">
          <forge-icon name="download"></forge-icon>
        </forge-icon-button>
        <forge-table slot="body" .data=${tableData} .columnConfigurations=${columnConfigurations}></forge-table>
        <forge-stack slot="footer-start" inline alignment="center" wrap gap="8">
          <forge-button variant="outlined">Update asset inventory</forge-button>
          <forge-button variant="outlined">Asset inventory dataset</forge-button>
        </forge-stack>
        <forge-paginator slot="footer-primary-action" page-size="5" total="25" page-index="0"></forge-paginator>
      </forge-structured-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithTableAndStartButtons: Story = {};
