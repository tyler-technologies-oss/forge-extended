import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { ForgeAiDropdownMenuComponent } from './ai-dropdown-menu.js';
import { ForgeAiDropdownMenuItemComponent } from './ai-dropdown-menu-item.js';
import type { DropdownChangeEventDetail } from './selection-manager.js';

describe('ForgeAiDropdownMenuComponent', () => {
  it('should be defined', () => {
    expect(customElements.get('forge-ai-dropdown-menu')).to.equal(ForgeAiDropdownMenuComponent);
  });

  it('should render with default properties', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`<forge-ai-dropdown-menu></forge-ai-dropdown-menu>`);

    expect(el.variant).to.equal('button');
    expect(el.open).to.be.false;
    expect(el.disabled).to.be.false;
    expect(el.value).to.be.null;
    expect(el.selectionMode).to.equal('none');
  });

  it('should reflect open and disabled properties as attributes', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`<forge-ai-dropdown-menu></forge-ai-dropdown-menu>`);

    expect(el.hasAttribute('open')).to.be.false;
    expect(el.hasAttribute('disabled')).to.be.false;

    el.open = true;
    el.disabled = true;
    await elementUpdated(el);

    expect(el.hasAttribute('open')).to.be.true;
    expect(el.hasAttribute('disabled')).to.be.true;
  });

  it('should set variant property', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(
      html`<forge-ai-dropdown-menu variant="icon-button"></forge-ai-dropdown-menu>`
    );

    expect(el.variant).to.equal('icon-button');
  });

  it('should set selection mode property', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(
      html`<forge-ai-dropdown-menu selection-mode="single"></forge-ai-dropdown-menu>`
    );

    expect(el.selectionMode).to.equal('single');
  });

  it('should render trigger button with correct class for square variant', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(
      html`<forge-ai-dropdown-menu variant="square"></forge-ai-dropdown-menu>`
    );
    const trigger = el.shadowRoot?.querySelector('.ai-dropdown-menu__trigger') as HTMLElement;

    expect(trigger).to.exist;
    expect(trigger.classList.contains('ai-dropdown-menu__trigger--circular')).to.be.false;
  });

  it('should render trigger button with correct class for circular variant', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(
      html`<forge-ai-dropdown-menu variant="circular"></forge-ai-dropdown-menu>`
    );
    const trigger = el.shadowRoot?.querySelector('.ai-dropdown-menu__trigger') as HTMLElement;

    expect(trigger).to.exist;
    expect(trigger.classList.contains('ai-dropdown-menu__trigger--circular')).to.be.true;
  });

  it('should render dropdown component', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`<forge-ai-dropdown-menu></forge-ai-dropdown-menu>`);
    const dropdown = el.shadowRoot?.querySelector('forge-ai-dropdown') as HTMLElement;

    expect(dropdown).to.exist;
  });

  it('should set aria attributes correctly', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`<forge-ai-dropdown-menu></forge-ai-dropdown-menu>`);
    const trigger = el.shadowRoot?.querySelector('.ai-dropdown-menu__trigger') as HTMLElement;

    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
    expect(trigger.getAttribute('aria-haspopup')).to.equal('listbox');

    el.open = true;
    await elementUpdated(el);

    expect(trigger.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should dispatch forge-ai-dropdown-menu-change event when item is selected', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    let eventDetail: DropdownChangeEventDetail | null = null;
    el.addEventListener('forge-ai-dropdown-menu-change', (event: CustomEvent<DropdownChangeEventDetail>) => {
      eventDetail = event.detail;
    });

    el.open = true;
    await elementUpdated(el);

    const item = el.querySelector('forge-ai-dropdown-menu-item');
    item?.click();

    expect(eventDetail).to.exist;
    expect(eventDetail.value).to.equal('item1');
    expect(eventDetail.selectedItem).to.equal(item);
  });

  it('should close dropdown when focus leaves the component', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    // Create an external element to focus on
    const externalButton = document.createElement('button');
    document.body.appendChild(externalButton);

    try {
      el.open = true;
      await elementUpdated(el);
      expect(el.open).to.be.true;

      // Simulate focus leaving the component
      el.dispatchEvent(
        new FocusEvent('focusout', {
          bubbles: true,
          relatedTarget: externalButton
        })
      );

      // Wait for the setTimeout in _onFocusOut to execute
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(el.open).to.be.false;
    } finally {
      document.body.removeChild(externalButton);
    }
  });

  it('should not close dropdown when focus moves within the component', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item2" text="Item 2"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    el.open = true;
    await elementUpdated(el);
    expect(el.open).to.be.true;

    const items = el.querySelectorAll('forge-ai-dropdown-menu-item');
    const firstItem = items[0] as HTMLElement;
    const secondItem = items[1] as HTMLElement;

    // Focus first item
    firstItem.focus();

    // Simulate focus moving to second item within the component
    el.dispatchEvent(
      new FocusEvent('focusout', {
        bubbles: true,
        relatedTarget: secondItem
      })
    );

    // Wait for the setTimeout in _onFocusOut to execute
    await new Promise(resolve => setTimeout(resolve, 10));

    // Should still be open since focus is within the component
    expect(el.open).to.be.true;
  });

  it('should wrap navigation from first to last item with up arrow', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item2" text="Item 2"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item3" text="Item 3"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    el.open = true;
    await elementUpdated(el);

    // First item should be focused initially (selectedIndex = 0)
    const items = el.querySelectorAll('forge-ai-dropdown-menu-item');
    expect(items[0].getAttribute('tabindex')).to.equal('0');

    // Press up arrow - should wrap to last item
    const upArrowEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      bubbles: true
    });
    el.dispatchEvent(upArrowEvent);

    // Should now focus last item (index 2)
    expect(items[2].getAttribute('tabindex')).to.equal('0');
    expect(items[0].getAttribute('tabindex')).to.equal('-1');
    expect(items[1].getAttribute('tabindex')).to.equal('-1');
  });

  it('should wrap navigation from last to first item with down arrow', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item2" text="Item 2"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item3" text="Item 3"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    el.open = true;
    await elementUpdated(el);

    const items = el.querySelectorAll('forge-ai-dropdown-menu-item');

    // Navigate to last item first
    const downArrowEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });
    el.dispatchEvent(downArrowEvent); // Move to item 2
    el.dispatchEvent(downArrowEvent); // Move to item 3 (last)

    // Verify we're at last item
    expect(items[2].getAttribute('tabindex')).to.equal('0');

    // Press down arrow again - should wrap to first item
    el.dispatchEvent(downArrowEvent);

    // Should now focus first item (index 0)
    expect(items[0].getAttribute('tabindex')).to.equal('0');
    expect(items[1].getAttribute('tabindex')).to.equal('-1');
    expect(items[2].getAttribute('tabindex')).to.equal('-1');
  });

  it('should handle navigation with single item (no wrapping needed)', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    el.open = true;
    await elementUpdated(el);

    const item = el.querySelector('forge-ai-dropdown-menu-item');
    expect(item?.getAttribute('tabindex')).to.equal('0');

    // Press up and down arrows - should stay on same item
    const upArrowEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      bubbles: true
    });
    const downArrowEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });

    el.dispatchEvent(upArrowEvent);
    expect(item?.getAttribute('tabindex')).to.equal('0');

    el.dispatchEvent(downArrowEvent);
    expect(item?.getAttribute('tabindex')).to.equal('0');
  });

  it('should focus first item when opened via down arrow key', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item2" text="Item 2"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    const trigger = el.shadowRoot?.querySelector('.ai-dropdown-menu__trigger') as HTMLElement;
    trigger.focus();

    // Press down arrow to open dropdown
    const downArrowEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });
    el.dispatchEvent(downArrowEvent);

    await elementUpdated(el);

    // First item should be focused immediately when opened via keyboard
    const items = el.querySelectorAll('forge-ai-dropdown-menu-item');
    expect(items[0].getAttribute('tabindex')).to.equal('0');
    expect(items[1].getAttribute('tabindex')).to.equal('-1');
  });

  it('should not focus any item when opened via mouse click', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item2" text="Item 2"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    const trigger = el.shadowRoot?.querySelector('.ai-dropdown-menu__trigger') as HTMLElement;

    // Click to open dropdown (simulate mouse)
    trigger.click();
    await elementUpdated(el);

    // No item should be focused initially when opened via mouse
    const items = el.querySelectorAll('forge-ai-dropdown-menu-item');
    expect(items[0].getAttribute('tabindex')).to.equal('-1');
    expect(items[1].getAttribute('tabindex')).to.equal('-1');
  });

  it('should focus first item on first down arrow after mouse open', async () => {
    const el = await fixture<ForgeAiDropdownMenuComponent>(html`
      <forge-ai-dropdown-menu>
        <forge-ai-dropdown-menu-item value="item1" text="Item 1"></forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="item2" text="Item 2"></forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `);

    const trigger = el.shadowRoot?.querySelector('.ai-dropdown-menu__trigger') as HTMLElement;

    // Open via mouse click
    trigger.click();
    await elementUpdated(el);

    // Press down arrow - should go to first item, not second
    const downArrowEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });
    el.dispatchEvent(downArrowEvent);

    const items = el.querySelectorAll('forge-ai-dropdown-menu-item');
    expect(items[0].getAttribute('tabindex')).to.equal('0');
    expect(items[1].getAttribute('tabindex')).to.equal('-1');

    // Press down arrow again - should go to second item
    el.dispatchEvent(downArrowEvent);

    expect(items[0].getAttribute('tabindex')).to.equal('-1');
    expect(items[1].getAttribute('tabindex')).to.equal('0');
  });

  describe('Selection Mode Tests', () => {
    it('should set correct ARIA attributes for none selection mode', async () => {
      const el = await fixture<ForgeAiDropdownMenuComponent>(html`
        <forge-ai-dropdown-menu selection-mode="none">
          <forge-ai-dropdown-menu-item value="item1">Item 1</forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      `);

      const trigger = el.shadowRoot?.querySelector('button') as HTMLElement;
      const dropdown = el.shadowRoot?.querySelector('[role]') as HTMLElement;

      expect(trigger.getAttribute('aria-haspopup')).to.equal('menu');
      expect(dropdown.getAttribute('role')).to.equal('menu');
      expect(dropdown.hasAttribute('aria-multiselectable')).to.be.false;
    });

    it('should set correct ARIA attributes for single selection mode', async () => {
      const el = await fixture<ForgeAiDropdownMenuComponent>(html`
        <forge-ai-dropdown-menu selection-mode="single">
          <forge-ai-dropdown-menu-item value="item1">Item 1</forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      `);

      const trigger = el.shadowRoot?.querySelector('button') as HTMLElement;
      const dropdown = el.shadowRoot?.querySelector('[role]') as HTMLElement;

      expect(trigger.getAttribute('aria-haspopup')).to.equal('listbox');
      expect(dropdown.getAttribute('role')).to.equal('listbox');
      expect(dropdown.hasAttribute('aria-multiselectable')).to.be.false;
    });

    it('should set correct ARIA attributes for multi selection mode', async () => {
      const el = await fixture<ForgeAiDropdownMenuComponent>(html`
        <forge-ai-dropdown-menu selection-mode="multi">
          <forge-ai-dropdown-menu-item value="item1">Item 1</forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      `);

      const trigger = el.shadowRoot?.querySelector('button') as HTMLElement;
      const dropdown = el.shadowRoot?.querySelector('[role]') as HTMLElement;

      expect(trigger.getAttribute('aria-haspopup')).to.equal('listbox');
      expect(dropdown.getAttribute('role')).to.equal('listbox');
      expect(dropdown.getAttribute('aria-multiselectable')).to.equal('true');
    });

    it('should handle single selection mode correctly', async () => {
      const el = await fixture<ForgeAiDropdownMenuComponent>(html`
        <forge-ai-dropdown-menu selection-mode="single">
          <forge-ai-dropdown-menu-item value="item1">Item 1</forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="item2">Item 2</forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      `);

      let eventDetail: DropdownChangeEventDetail | null = null;
      el.addEventListener('forge-ai-dropdown-menu-change', (event: CustomEvent<DropdownChangeEventDetail>) => {
        eventDetail = event.detail;
      });

      el.open = true;
      await elementUpdated(el);

      const items = el.querySelectorAll('forge-ai-dropdown-menu-item');

      // Click first item
      (items[0] as HTMLElement).click();

      expect(eventDetail).to.exist;
      expect(eventDetail.value).to.equal('item1');
      expect(el.value).to.equal('item1');
      expect(el.open).to.be.false; // Should close after single selection
    });

    it('should handle multi selection mode correctly', async () => {
      const el = await fixture<ForgeAiDropdownMenuComponent>(html`
        <forge-ai-dropdown-menu selection-mode="multi">
          <forge-ai-dropdown-menu-item value="item1">Item 1</forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="item2">Item 2</forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      `);

      let eventDetail: DropdownChangeEventDetail | null = null;
      el.addEventListener('forge-ai-dropdown-menu-change', (event: CustomEvent<DropdownChangeEventDetail>) => {
        eventDetail = event.detail;
      });

      el.open = true;
      await elementUpdated(el);

      const items = el.querySelectorAll('forge-ai-dropdown-menu-item');

      // Click first item
      (items[0] as HTMLElement).click();

      expect(eventDetail).to.exist;
      expect(Array.isArray(eventDetail.value)).to.be.true;
      expect(eventDetail.value).to.deep.equal(['item1']);
      expect(Array.isArray(el.value)).to.be.true;
      expect(el.value).to.deep.equal(['item1']);
      expect(el.open).to.be.true; // Should stay open for multi-select

      // Click second item
      (items[1] as HTMLElement).click();

      expect(eventDetail.value).to.deep.equal(['item1', 'item2']);
      expect(el.value).to.deep.equal(['item1', 'item2']);
    });

    it('should toggle selection in multi mode', async () => {
      const el = await fixture<ForgeAiDropdownMenuComponent>(html`
        <forge-ai-dropdown-menu selection-mode="multi" .value=${['item1']}>
          <forge-ai-dropdown-menu-item value="item1">Item 1</forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="item2">Item 2</forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      `);

      let eventDetail: DropdownChangeEventDetail | null = null;
      el.addEventListener('forge-ai-dropdown-menu-change', (event: CustomEvent<DropdownChangeEventDetail>) => {
        eventDetail = event.detail;
      });

      el.open = true;
      await elementUpdated(el);

      const items = el.querySelectorAll('forge-ai-dropdown-menu-item');

      // Click already selected item (should deselect)
      (items[0] as HTMLElement).click();

      expect(eventDetail.value).to.deep.equal([]);
      expect(el.value).to.deep.equal([]);
    });

    it('should update item selection states when value changes', async () => {
      const el = await fixture<ForgeAiDropdownMenuComponent>(html`
        <forge-ai-dropdown-menu selection-mode="single">
          <forge-ai-dropdown-menu-item value="item1">Item 1</forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="item2">Item 2</forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      `);

      await elementUpdated(el);

      const items = el.querySelectorAll('forge-ai-dropdown-menu-item');

      // Initially no items selected
      expect((items[0] as ForgeAiDropdownMenuItemComponent).selected).to.be.false;
      expect((items[1] as ForgeAiDropdownMenuItemComponent).selected).to.be.false;

      // Set value programmatically
      el.value = 'item2';
      await elementUpdated(el);

      // Second item should be selected
      expect((items[0] as ForgeAiDropdownMenuItemComponent).selected).to.be.false;
      expect((items[1] as ForgeAiDropdownMenuItemComponent).selected).to.be.true;
    });
  });
});

describe('ForgeAiDropdownMenuItemComponent', () => {
  it('should be defined', () => {
    expect(customElements.get('forge-ai-dropdown-menu-item')).to.equal(ForgeAiDropdownMenuItemComponent);
  });

  it('should render with default properties', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(
      html`<forge-ai-dropdown-menu-item></forge-ai-dropdown-menu-item>`
    );

    expect(el.value).to.equal('');
    expect(el.selected).to.be.false;
    expect(el.disabled).to.be.false;
    expect(el.selectionMode).to.equal('none');
  });

  it('should reflect selected and disabled properties as attributes', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(
      html`<forge-ai-dropdown-menu-item></forge-ai-dropdown-menu-item>`
    );

    expect(el.hasAttribute('selected')).to.be.false;
    expect(el.hasAttribute('disabled')).to.be.false;

    el.selected = true;
    el.disabled = true;
    await elementUpdated(el);

    expect(el.hasAttribute('selected')).to.be.true;
    expect(el.hasAttribute('disabled')).to.be.true;
  });

  it('should set aria attributes correctly for none mode', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(
      html`<forge-ai-dropdown-menu-item></forge-ai-dropdown-menu-item>`
    );

    expect(el.getAttribute('role')).to.equal('menuitem');
    expect(el.getAttribute('tabindex')).to.equal('-1');
    expect(el.hasAttribute('aria-selected')).to.be.false; // menuitem should not have aria-selected
    expect(el.getAttribute('aria-disabled')).to.equal('false');
    expect(el.hasAttribute('aria-checked')).to.be.false;

    el.selected = true;
    el.disabled = true;
    await elementUpdated(el);

    expect(el.hasAttribute('aria-selected')).to.be.false; // menuitem should not have aria-selected even when selected
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(el.hasAttribute('aria-checked')).to.be.false;
  });

  it('should set correct role for single selection mode', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(
      html`<forge-ai-dropdown-menu-item selection-mode="single"></forge-ai-dropdown-menu-item>`
    );

    expect(el.getAttribute('role')).to.equal('menuitemradio');
    expect(el.getAttribute('aria-selected')).to.equal('false');
    expect(el.hasAttribute('aria-checked')).to.be.false;

    el.selected = true;
    await elementUpdated(el);

    expect(el.getAttribute('aria-selected')).to.equal('true');
    expect(el.hasAttribute('aria-checked')).to.be.false;
  });

  it('should set correct role and aria-checked for multi selection mode', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(
      html`<forge-ai-dropdown-menu-item selection-mode="multi"></forge-ai-dropdown-menu-item>`
    );

    expect(el.getAttribute('role')).to.equal('menuitemcheckbox');
    expect(el.getAttribute('aria-checked')).to.equal('false');
    expect(el.hasAttribute('aria-selected')).to.be.false; // menuitemcheckbox should not have aria-selected

    el.selected = true;
    await elementUpdated(el);

    expect(el.getAttribute('aria-checked')).to.equal('true');
    expect(el.hasAttribute('aria-selected')).to.be.false; // menuitemcheckbox should not have aria-selected even when selected
  });

  it('should show selection icon when selected and in selection mode', async () => {
    // Test single mode with circle icon
    const singleEl = await fixture<ForgeAiDropdownMenuItemComponent>(html`
      <forge-ai-dropdown-menu-item selection-mode="single" selected>Item</forge-ai-dropdown-menu-item>
    `);

    const singleIcon = singleEl.shadowRoot?.querySelector('.ai-dropdown-menu-item__selection-icon');
    expect(singleIcon).to.exist;

    // Test multi mode with check icon
    const multiEl = await fixture<ForgeAiDropdownMenuItemComponent>(html`
      <forge-ai-dropdown-menu-item selection-mode="multi" selected>Item</forge-ai-dropdown-menu-item>
    `);

    const multiIcon = multiEl.shadowRoot?.querySelector('.ai-dropdown-menu-item__selection-icon');
    expect(multiIcon).to.exist;
  });

  it('should reserve space for selection icon when not selected but in selection mode', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(html`
      <forge-ai-dropdown-menu-item selection-mode="single">Item</forge-ai-dropdown-menu-item>
    `);

    const iconSlot = el.shadowRoot?.querySelector('.ai-dropdown-menu-item__selection-icon');
    expect(iconSlot).to.exist;

    // Should have the container but no SVG content when not selected
    const svg = iconSlot?.querySelector('svg');
    expect(svg).to.not.exist;
  });

  it('should not show selection icon in none mode', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(html`
      <forge-ai-dropdown-menu-item selection-mode="none" selected>Item</forge-ai-dropdown-menu-item>
    `);

    const icon = el.shadowRoot?.querySelector('.ai-dropdown-menu-item__selection-icon');
    expect(icon).to.not.exist;
  });

  it('should render text and description when provided', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(html`
      <forge-ai-dropdown-menu-item text="Item Text" description="Item Description"></forge-ai-dropdown-menu-item>
    `);

    const textEl = el.shadowRoot?.querySelector('.ai-dropdown-menu-item__text') as HTMLElement;
    const descEl = el.shadowRoot?.querySelector('.ai-dropdown-menu-item__description') as HTMLElement;

    expect(textEl).to.exist;
    expect(textEl.textContent).to.equal('Item Text');
    expect(descEl).to.exist;
    expect(descEl.textContent).to.equal('Item Description');
  });

  it('should render slotted content', async () => {
    const el = await fixture<ForgeAiDropdownMenuItemComponent>(html`
      <forge-ai-dropdown-menu-item>
        <div id="custom">Custom Content</div>
      </forge-ai-dropdown-menu-item>
    `);

    const content = el.querySelector('#custom');
    expect(content).to.exist;
    expect(content?.textContent).to.equal('Custom Content');
  });
});
