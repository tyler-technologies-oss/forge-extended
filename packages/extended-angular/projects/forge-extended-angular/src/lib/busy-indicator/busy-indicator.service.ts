import { Injectable } from '@angular/core';
import { BusyIndicatorComponent, defineBusyIndicatorComponent } from '@tylertech/forge-extended';
import { BusyIndicatorRef } from './busy-indicator-ref';

/**
 * Provides facilities for showing a `<forge-busy-indicator>` element.
 */
@Injectable({
  providedIn: 'root'
})
export class BusyIndicatorService {
  static {
    defineBusyIndicatorComponent();
  }

  /**
   * Shows a busy indicator in a parent element (or the body if not provided).
   * @param config The busy indicator component configuration.
   * @param [parent] The parent element to attach this busy indicator instance to.
   */
  public open(config?: Partial<BusyIndicatorComponent>, parent = document.body): BusyIndicatorRef {
    const element = document.createElement('forge-busy-indicator');
    if (config) {
      Object.assign(element, config);
    }
    parent.appendChild(element);
    element.open = true;
    return new BusyIndicatorRef(element);
  }
}
