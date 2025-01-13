import { BusyIndicatorElement, QuantityFieldElement } from '@tylertech/forge-extended';

export * from './components';

export type HTMLElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type CustomElementProps<T> = HTMLElementProps & Partial<T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'forge-busy-indicator': CustomElementProps<BusyIndicatorElement>;
      'forge-quantity-field': CustomElementProps<QuantityFieldElement>;
    }
  }
}
