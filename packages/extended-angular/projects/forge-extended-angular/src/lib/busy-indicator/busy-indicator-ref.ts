import { Observable, Subject } from 'rxjs';
import { ElementRef } from '@angular/core';
import { BusyIndicatorElement } from '@tylertech/forge-extended';

export class BusyIndicatorRef {
  private readonly _elementRef: ElementRef<BusyIndicatorElement>;

  private readonly _afterCancel = new Subject<CustomEvent<void>>();
  public afterCancel: Observable<CustomEvent<void>> = this._afterCancel.asObservable();

  public componentInstance: BusyIndicatorElement;

  constructor(instance: BusyIndicatorElement) {
    this._elementRef = new ElementRef(instance);
    if (instance.cancelable) {
      instance.addEventListener('forge-busy-indicator-cancel', evt => this._afterCancel.next(evt));
    }
  }

  public hide(): void {
    this.nativeElement.open = false;
    this.nativeElement.remove();
    this._afterCancel.complete();
  }

  public get nativeElement(): BusyIndicatorElement {
    return this._elementRef.nativeElement;
  }
}
