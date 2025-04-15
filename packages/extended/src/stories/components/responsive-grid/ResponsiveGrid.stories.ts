import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/responsive-grid';

const component = 'forge-responsive-grid';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const meta = {
  title: 'Components/Responsive Grid',
  render: args => {
    return html`<forge-responsive-grid
        .gap=${args.gap}
        .minColumnSize=${args.minColumnSize}
        .maxColumnCount=${args.maxColumnCount}>
        ${cards.map(() => {
          return html`
            <forge-card no-padding>
              <div class="container">
                <div class="avatar"></div>
                <h6 class="forge-typography--headline5 overflow zero-margin">Rick Dalton</h6>
                <span class="forge-typography--body1" style="margin-bottom: 16px">Hollywood, CA</span>
                <div class="overflow">
                  <a href="mailto:email@tylertech.com">rick.dalton@tylertech.com</a>
                </div>
              </div>
              <div class="footer">
                <forge-button> View Profile </forge-button>
                <forge-icon-button>
                  <forge-icon name="notifications" external></forge-icon>
                </forge-icon-button>
              </div>
            </forge-card>
          `;
        })}
      </forge-responsive-grid>

      <style>
        .container {
          display: flex;
          justify-content: center;
          justify-items: center;
          flex-direction: column;
          align-content: center;
          align-items: center;
        }

        .avatar {
          width: 100px;
          height: 100px;
          background-image: url('https://png.pngtree.com/svg/20170602/0db185fb9c.svg');
          background-position: center center;
          background-size: cover;
          border-radius: 50%;
          margin: 16px 0px 8px 0px;
        }

        .footer {
          margin-top: 16px;
          padding: 0px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #e1e1e1;
          height: 56px;
        }

        .overflow {
          overflow: hidden;
          text-overflow: ellipsis;
          width: 180px;
          text-align: center;
          white-space: nowrap;
        }

        .zero-margin {
          margin: 0px;
          padding: 0px;
        }
      </style>`;
  },
  component,
  argTypes: {
    maxColumnCount: { control: 'number' },
    minColumnSize: { control: 'number' },
    gap: { control: 'number' }
  },
  args: {
    maxColumnCount: 3,
    minColumnSize: 320,
    gap: 16
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
