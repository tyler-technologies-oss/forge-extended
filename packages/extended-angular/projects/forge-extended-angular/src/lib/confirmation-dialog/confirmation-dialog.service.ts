import { Injectable } from '@angular/core';
import { ConfirmationDialogComponent, ConfirmationDialogProperties } from '@tylertech/forge-extended';
import { ConfirmationDialogRef } from './confirmation-dialog-ref';

interface ConfirmationDialogServiceConfig extends ConfirmationDialogProperties {
  title: string;
  message: string;
  secondaryButtonText: string;
  primaryButtonText: string;
  description: string;
  label: string;
  busyLabel: string;
}

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

  public open(
    {
      title,
      message,
      secondaryButtonText,
      primaryButtonText,
      description,
      label,
      busyLabel,
      ...config
    }: Partial<ConfirmationDialogServiceConfig>,
    parent = document.body
  ): ConfirmationDialogRef {
    const element = document.createElement('forge-confirmation-dialog') as ConfirmationDialogComponent;

    if (title) {
      this._createAndAppendSlottedElement(element, title, 'title');
    }
    if (message) {
      this._createAndAppendSlottedElement(element, message, 'message');
    }
    if (secondaryButtonText) {
      this._createAndAppendSlottedElement(element, secondaryButtonText, 'secondary-button-text');
    }
    if (primaryButtonText) {
      this._createAndAppendSlottedElement(element, primaryButtonText, 'primary-button-text');
    }
    if (description) {
      element.description = description;
    }
    if (label) {
      element.label = label;
    }
    if (busyLabel) {
      element.busyLabel = busyLabel;
    }

    Object.assign(element, config);
    parent.appendChild(element);

    element.open = true;
    return new ConfirmationDialogRef(element);
  }

  private _createAndAppendSlottedElement(
    dialog: ConfirmationDialogComponent,
    slotContent: string,
    slotName: string
  ): void {
    let span = document.createElement('span') as HTMLSpanElement;
    span.innerText = slotContent;
    span.slot = slotName;
    dialog.appendChild(span);
  }
}
