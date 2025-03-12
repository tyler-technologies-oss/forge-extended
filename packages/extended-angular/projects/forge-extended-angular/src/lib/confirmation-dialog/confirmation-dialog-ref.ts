import { ElementRef } from '@angular/core';
import { ConfirmationDialogActionEventData, ConfirmationDialogComponent } from '@tylertech/forge-extended';
import { Observable, Subject } from 'rxjs';

export class ConfirmationDialogRef {
  private readonly _elementRef: ElementRef<ConfirmationDialogComponent>;

  private readonly _onAction = new Subject<CustomEvent<ConfirmationDialogActionEventData>>();
  public onAction: Observable<CustomEvent<ConfirmationDialogActionEventData>> = this._onAction.asObservable();

  public componentInstance: ConfirmationDialogComponent;

  constructor(instance: ConfirmationDialogComponent) {
    this._elementRef = new ElementRef(instance);
    instance.addEventListener('forge-confirmation-dialog-action', evt => this._onAction.next(evt));
  }

  public close(): void {
    this.nativeElement.open = false;
    this.nativeElement.remove();
  }

  public get nativeElement(): ConfirmationDialogComponent {
    return this._elementRef.nativeElement;
  }

  public get isBusy(): boolean {
    return this.nativeElement.isBusy;
  }

  public set isBusy(newValue: boolean) {
    this.nativeElement.isBusy = newValue;
  }
}
