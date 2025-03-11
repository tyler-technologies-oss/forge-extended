import { Injectable } from '@angular/core';
import { ConfirmationDialogComponent } from '@tylertech/forge-extended';
import { ConfirmationDialogRef } from './confirmation-dialog-ref';

/**
 * Provides facilities for showing a `<forge-confirmation-dialog>` element.
 */
@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  /**
   * Opens a confirmation dialog in a parent element (or the body if not provided).
   * @param config The confirmation dialog component configuration.
   * @param [parent] The parent element to attach this confirmation dialog instance to.
   */
  public open(config: Partial<ConfirmationDialogComponent>, parent = document.body): ConfirmationDialogRef {
    const element = document.createElement('forge-confirmation-dialog') as ConfirmationDialogComponent;
    Object.assign(element, config);
    parent.appendChild(element);
    element.open = true;
    return new ConfirmationDialogRef(element);
  }
}
