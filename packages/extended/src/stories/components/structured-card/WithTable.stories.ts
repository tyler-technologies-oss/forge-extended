import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import {
  defineTableComponent,
  defineIconButtonComponent,
  defineIconComponent,
  definePaginatorComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconFilter, tylIconRefresh, tylIconDownload } from '@tylertech/tyler-icons';

import '$lib/structured-card';

defineTableComponent();
defineIconButtonComponent();
defineIconComponent();
definePaginatorComponent();
IconRegistry.define([tylIconFilter, tylIconRefresh, tylIconDownload]);

const component = 'forge-structured-card';

const meta = {
  title: 'Components/Structured Card',
  component,

  render: () => {
    const tableData = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
      { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'User' },
      { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com', role: 'Manager' },
      { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'User' }
    ];

    const columnConfigurations = [
      { property: 'name', header: 'Name' },
      { property: 'email', header: 'Email' },
      { property: 'role', header: 'Role' }
    ];

    setTimeout(() => {
      const table = document.querySelector('forge-table');
      if (table) {
        table.data = tableData;
        table.columnConfigurations = columnConfigurations;
      }
    }, 0);

    return html`
      <forge-structured-card heading-level="2" with-table>
        <div slot="title">User Management</div>
        <forge-icon-button aria-label="Refresh data" slot="header-actions">
          <forge-icon name="refresh"></forge-icon>
        </forge-icon-button>
        <forge-icon-button aria-label="Download report" slot="header-actions">
          <forge-icon name="download"></forge-icon>
        </forge-icon-button>
        <forge-table slot="body"></forge-table>
        <forge-paginator slot="footer-primary-action" page-size="5" total="25" page-index="0"></forge-paginator>
      </forge-structured-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithTable: Story = {};
