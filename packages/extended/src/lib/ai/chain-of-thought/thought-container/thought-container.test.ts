import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ThoughtContainerComponent } from './thought-container';

describe('ThoughtContainerComponent', () => {
  it('should create component instance', async () => {
    const element = await fixture<ThoughtContainerComponent>(html`<forge-thought-container></forge-thought-container>`);
    expect(element).to.be.instanceOf(ThoughtContainerComponent);
  });

  it('should have default properties', async () => {
    const element = await fixture<ThoughtContainerComponent>(html`<forge-thought-container></forge-thought-container>`);
    expect(element.step).to.be.undefined;
    expect(element.title).to.equal('');
  });

  it('should render with custom title', async () => {
    const element = await fixture<ThoughtContainerComponent>(
      html`<forge-thought-container title="Test Title"></forge-thought-container>`
    );
    expect(element.title).to.equal('Test Title');
    const titleElement = element.shadowRoot?.querySelector('.thought-title');
    expect(titleElement?.textContent).to.equal('Test Title');
  });

  it('should render with step number', async () => {
    const element = await fixture<ThoughtContainerComponent>(
      html`<forge-thought-container step="1"></forge-thought-container>`
    );
    expect(element.step).to.equal(1);
    const stepElement = element.shadowRoot?.querySelector('.step-number');
    expect(stepElement?.textContent).to.equal('1');
  });

  it('should not render step number when not provided', async () => {
    const element = await fixture<ThoughtContainerComponent>(
      html`<forge-thought-container title="No Step"></forge-thought-container>`
    );
    const stepElement = element.shadowRoot?.querySelector('.step-number');
    expect(stepElement).to.be.null;
  });

  it('should render with both step and title', async () => {
    const element = await fixture<ThoughtContainerComponent>(
      html`<forge-thought-container step="2" title="Step Two"></forge-thought-container>`
    );

    const stepElement = element.shadowRoot?.querySelector('.step-number');
    const titleElement = element.shadowRoot?.querySelector('.thought-title');

    expect(stepElement?.textContent).to.equal('2');
    expect(titleElement?.textContent).to.equal('Step Two');
  });

  it('should render slotted content', async () => {
    const element = await fixture<ThoughtContainerComponent>(html`
      <forge-thought-container>
        <div>Test content</div>
      </forge-thought-container>
    `);

    const slot = element.shadowRoot?.querySelector('slot');
    expect(slot).to.exist;
  });

  it('should have correct CSS classes', async () => {
    const element = await fixture<ThoughtContainerComponent>(
      html`<forge-thought-container step="1" title="Test"></forge-thought-container>`
    );

    const container = element.shadowRoot?.querySelector('.thought-container');
    const header = element.shadowRoot?.querySelector('.thought-header');
    const content = element.shadowRoot?.querySelector('.thought-content');

    expect(container).to.exist;
    expect(header).to.exist;
    expect(content).to.exist;
  });

  it('should update properties when changed', async () => {
    const element = await fixture<ThoughtContainerComponent>(html`<forge-thought-container></forge-thought-container>`);

    element.step = 5;
    element.title = 'Updated Title';
    await element.updateComplete;

    const stepElement = element.shadowRoot?.querySelector('.step-number');
    const titleElement = element.shadowRoot?.querySelector('.thought-title');

    expect(stepElement?.textContent).to.equal('5');
    expect(titleElement?.textContent).to.equal('Updated Title');
  });
});
