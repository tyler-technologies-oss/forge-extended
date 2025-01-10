import { Injectable } from '@angular/core';
import { BusyIndicatorElement } from '@tylertech/forge-extended';

/**
 * Provides facilities for showing/hiding a `<forge-busy-indicator>` element.
 */
@Injectable({
  providedIn: 'root'
})
export class BusyIndicatorService {
  /**
   * Shows a busy indicator in a parent element (or the body if not provided).
   * @param config The busy indicator component configuration.
   * @param [parent] The parent element to attach this busy indicator instance to.
   */
  public show(config: Partial<BusyIndicatorElement>, parent = document.body): BusyIndicatorElement {
    const element = document.createElement('forge-busy-indicator');
    Object.assign(element, config);
    parent.appendChild(element);
    element.open = true;
    return element;
  }

  /**
   * Removes the busy indicator from the DOM.
   */
  public hide(selectorOrInstance?: string | BusyIndicatorElement): void {
    if (typeof selectorOrInstance === 'string') {
      const element = document.querySelector(selectorOrInstance ?? 'forge-busy-indicator') as BusyIndicatorElement;
      if (element) {
        element.open = false;
        element.remove();
      }
    } else if (selectorOrInstance instanceof BusyIndicatorElement) {
      selectorOrInstance.open = false;
      selectorOrInstance.remove();
    }
  }
}
