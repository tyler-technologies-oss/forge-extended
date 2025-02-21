import { ElementRef } from '@angular/core';
import { ConfirmationDialogComponent } from '@tylertech/forge-extended';

export class ConfirmationDialogRef {
  private readonly _elementRef: ElementRef<ConfirmationDialogComponent>;

  public componentInstance: ConfirmationDialogComponent;

  constructor(instance: ConfirmationDialogComponent) {
    this._elementRef = new ElementRef(instance);
  }

  public hide(): void {
    this.nativeElement.open = false;
    this.nativeElement.remove();
  }

  public get nativeElement(): ConfirmationDialogComponent {
    return this._elementRef.nativeElement;
  }
}
