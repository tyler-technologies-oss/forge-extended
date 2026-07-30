import { expect } from '@esm-bundle/chai';
import { elementUpdated, fixture, html, oneEvent } from '@open-wc/testing';
import { ProgressTrackerComponent, ProgressTrackerStep, ProgressTrackerStepInfoEventData } from './progress-tracker';

class ProgressTrackerHarness {
  constructor(public el: ProgressTrackerComponent) {}

  public get headerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.header') as HTMLElement;
  }

  public get titleSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="title"]') as HTMLSlotElement;
  }

  public get actionsSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="actions"]') as HTMLSlotElement;
  }

  public get stepListElement(): HTMLOListElement {
    return this.el.shadowRoot!.querySelector('.steps') as HTMLOListElement;
  }

  public get stepElements(): HTMLLIElement[] {
    return Array.from(this.el.shadowRoot!.querySelectorAll('.step'));
  }

  public get connectorElements(): HTMLElement[] {
    return Array.from(this.el.shadowRoot!.querySelectorAll('.connector'));
  }

  public stepButton(index: number): HTMLButtonElement | null {
    return this.stepElements[index].querySelector('button.step-content');
  }

  public stepLabelText(index: number): string {
    return (this.stepElements[index].querySelector('.label > span') as HTMLElement).textContent ?? '';
  }

  public stepStatusText(index: number): string {
    return (this.stepElements[index].querySelector('.sr-only') as HTMLElement).textContent ?? '';
  }

  public stepNodeElement(index: number): HTMLElement {
    return this.stepElements[index].querySelector('.node') as HTMLElement;
  }
}

const DEFAULT_STEPS: ProgressTrackerStep[] = [
  { label: 'Application Received', completed: true, description: 'Your application has been received.' },
  { label: 'Fees Paid', completed: true },
  { label: 'Internal Review', completed: true, description: 'Staff are reviewing your submission.' },
  { label: 'Documents Approved' },
  { label: 'Record Issued' }
];

interface ProgressTrackerFixtureConfig {
  steps?: ProgressTrackerStep[];
  orientation?: 'horizontal' | 'vertical';
  completedLabel?: string;
  incompleteLabel?: string;
}

async function createFixture({
  steps = DEFAULT_STEPS,
  orientation,
  completedLabel,
  incompleteLabel
}: ProgressTrackerFixtureConfig = {}): Promise<ProgressTrackerHarness> {
  const el = await fixture<ProgressTrackerComponent>(html`
    <forge-progress-tracker
      .steps=${steps}
      orientation=${orientation ?? 'horizontal'}
      completed-label=${completedLabel ?? 'Completed'}
      incomplete-label=${incompleteLabel ?? 'Not completed'}>
      <h2 slot="title">Record Progress</h2>
      <button slot="actions" type="button">Show Workflow</button>
    </forge-progress-tracker>
  `);
  return new ProgressTrackerHarness(el);
}

describe('ProgressTrackerComponent', () => {
  it('should render', async () => {
    const harness = await createFixture();

    expect(harness.el).to.be.instanceOf(ProgressTrackerComponent);
    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.stepListElement).to.be.ok;
  });

  it('should define sub-component dependencies', () => {
    expect(window.customElements.get('forge-icon')).to.be.ok;
  });

  it('should have title and actions slots available', async () => {
    const harness = await createFixture();

    expect(harness.titleSlot).to.be.ok;
    expect(harness.actionsSlot).to.be.ok;
  });

  it('should render no steps by default', async () => {
    const el = await fixture<ProgressTrackerComponent>(html`<forge-progress-tracker></forge-progress-tracker>`);
    const harness = new ProgressTrackerHarness(el);

    expect(harness.el.steps).to.deep.equal([]);
    expect(harness.stepElements.length).to.equal(0);
  });

  describe('steps', () => {
    it('should render one step per entry in the order provided', async () => {
      const harness = await createFixture();

      expect(harness.stepElements.length).to.equal(DEFAULT_STEPS.length);
      DEFAULT_STEPS.forEach((step, index) => {
        expect(harness.stepLabelText(index)).to.equal(step.label);
      });
    });

    it('should re-render when steps are replaced with a new order', async () => {
      const harness = await createFixture();
      const reordered = [...DEFAULT_STEPS].reverse();

      harness.el.steps = reordered;
      await elementUpdated(harness.el);

      expect(harness.stepElements.length).to.equal(reordered.length);
      reordered.forEach((step, index) => {
        expect(harness.stepLabelText(index)).to.equal(step.label);
      });
    });

    it('should mark completed steps and render a check icon', async () => {
      const harness = await createFixture();

      expect(harness.stepElements[0].classList.contains('completed')).to.be.true;
      expect(harness.stepNodeElement(0).querySelector('forge-icon')).to.be.ok;
    });

    it('should render the step number for incomplete steps', async () => {
      const harness = await createFixture();

      expect(harness.stepElements[3].classList.contains('completed')).to.be.false;
      expect(harness.stepNodeElement(3).querySelector('forge-icon')).to.be.null;
      expect(harness.stepNodeElement(3).textContent?.trim()).to.equal('4');
    });

    it('should announce completion state with the configured labels', async () => {
      const harness = await createFixture({ completedLabel: 'Done', incompleteLabel: 'Pending' });

      expect(harness.stepStatusText(0)).to.equal('Done');
      expect(harness.stepStatusText(3)).to.equal('Pending');
    });

    it('should set aria-current on the first incomplete step', async () => {
      const harness = await createFixture();

      expect(harness.stepElements[3].getAttribute('aria-current')).to.equal('step');
      harness.stepElements
        .filter((_, index) => index !== 3)
        .forEach(step => expect(step.hasAttribute('aria-current')).to.be.false);
    });

    it('should not set aria-current when all steps are completed', async () => {
      const harness = await createFixture({ steps: DEFAULT_STEPS.map(step => ({ ...step, completed: true })) });

      harness.stepElements.forEach(step => expect(step.hasAttribute('aria-current')).to.be.false);
    });

    it('should apply the theme class to steps with a theme', async () => {
      const harness = await createFixture({
        steps: [
          { label: 'Approved', completed: true, theme: 'success' },
          { label: 'On Hold', theme: 'warning' },
          { label: 'Issued' }
        ]
      });

      expect(harness.stepElements[0].classList.contains('theme-success')).to.be.true;
      expect(harness.stepElements[1].classList.contains('theme-warning')).to.be.true;
      expect(Array.from(harness.stepElements[2].classList).some(cls => cls.startsWith('theme-'))).to.be.false;
    });
  });

  describe('connectors', () => {
    it('should render one connector between each pair of steps', async () => {
      const harness = await createFixture();

      expect(harness.connectorElements.length).to.equal(DEFAULT_STEPS.length - 1);
    });

    it('should fully fill connectors between completed steps', async () => {
      const harness = await createFixture();

      expect(harness.connectorElements[0].classList.contains('full')).to.be.true;
      expect(harness.connectorElements[1].classList.contains('full')).to.be.true;
    });

    it('should partially fill the connector after the most recently completed step', async () => {
      const harness = await createFixture();

      expect(harness.connectorElements[2].classList.contains('partial')).to.be.true;
    });

    it('should not fill connectors between incomplete steps', async () => {
      const harness = await createFixture();

      expect(harness.connectorElements[3].classList.contains('none')).to.be.true;
    });
  });

  describe('orientation', () => {
    it('should default to horizontal', async () => {
      const el = await fixture<ProgressTrackerComponent>(html`<forge-progress-tracker></forge-progress-tracker>`);

      expect(el.orientation).to.equal('horizontal');
    });

    it('should reflect the orientation attribute', async () => {
      const harness = await createFixture({ orientation: 'vertical' });

      expect(harness.el.getAttribute('orientation')).to.equal('vertical');

      harness.el.orientation = 'horizontal';
      await elementUpdated(harness.el);

      expect(harness.el.getAttribute('orientation')).to.equal('horizontal');
    });
  });

  describe('step info event', () => {
    it('should render steps with a description as buttons', async () => {
      const harness = await createFixture();

      expect(harness.stepButton(0)).to.be.ok;
      expect(harness.stepButton(0)?.getAttribute('aria-haspopup')).to.equal('dialog');
    });

    it('should not render steps without a description as buttons', async () => {
      const harness = await createFixture();

      expect(harness.stepButton(1)).to.be.null;
      expect(harness.stepButton(3)).to.be.null;
    });

    it('should dispatch forge-progress-tracker-step-info when an interactive step is selected', async () => {
      const harness = await createFixture();

      const eventPromise = oneEvent(harness.el, 'forge-progress-tracker-step-info');
      harness.stepButton(2)?.click();
      const { detail } = await eventPromise;

      expect(detail.index).to.equal(2);
      expect(detail.step).to.deep.equal(DEFAULT_STEPS[2]);
    });

    it('should dispatch a bubbling composed event so consumers can listen above the component', async () => {
      const harness = await createFixture();

      let received: CustomEvent<ProgressTrackerStepInfoEventData> | undefined;
      document.addEventListener(
        'forge-progress-tracker-step-info',
        evt => (received = evt as CustomEvent<ProgressTrackerStepInfoEventData>),
        { once: true }
      );
      harness.stepButton(0)?.click();

      expect(received).to.be.ok;
      expect(received!.bubbles).to.be.true;
      expect(received!.composed).to.be.true;
      expect(received!.detail.index).to.equal(0);
    });
  });
});
