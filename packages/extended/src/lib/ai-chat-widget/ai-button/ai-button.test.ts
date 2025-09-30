import { expect } from '@open-wc/testing';
import { html } from 'lit';
import { AiButtonComponent } from './ai-button';
import { fixture } from '../../test-utils/fixture';

describe('AiButtonComponent', () => {
  let component: AiButtonComponent;

  beforeEach(async () => {
    component = await fixture<AiButtonComponent>(html`<forge-ai-button></forge-ai-button>`);
  });

  it('should render', () => {
    expect(component).to.be.instanceOf(AiButtonComponent);
    expect(component.shadowRoot).not.to.be.null;
  });

  it('should have default properties', () => {
    expect(component.variant).to.equal('raised');
    expect(component.disabled).to.be.false;
    expect(component.type).to.equal('button');
  });

  it('should render forge-button with correct properties', async () => {
    component.variant = 'outlined';
    component.disabled = true;
    component.type = 'submit';
    await component.updateComplete;

    const forgeButton = component.shadowRoot!.querySelector('forge-button');
    expect(forgeButton).not.to.be.null;
    expect(forgeButton!.getAttribute('variant')).to.equal('outlined');
    expect(forgeButton!.hasAttribute('disabled')).to.be.true;
    expect(forgeButton!.getAttribute('type')).to.equal('submit');
  });

  it('should pass through slotted content', async () => {
    const buttonWithContent = await fixture<AiButtonComponent>(html`<forge-ai-button>Click me</forge-ai-button>`);

    const slot = buttonWithContent.shadowRoot!.querySelector('slot');
    expect(slot).not.to.be.null;
  });

  it('should set variant property', () => {
    component.variant = 'tonal';
    expect(component.variant).to.equal('tonal');
  });

  it('should set disabled property', () => {
    component.disabled = true;
    expect(component.disabled).to.be.true;
  });

  it('should set type property', () => {
    component.type = 'reset';
    expect(component.type).to.equal('reset');
  });
});
