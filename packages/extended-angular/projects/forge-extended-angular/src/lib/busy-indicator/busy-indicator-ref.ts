import { Observable, Subject } from 'rxjs';
import { ElementRef } from '@angular/core';
import { BusyIndicatorComponent } from '@tylertech/forge-extended';

export class BusyIndicatorRef {
  private readonly _elementRef: ElementRef<BusyIndicatorComponent>;

  private readonly _afterCancel = new Subject<CustomEvent<void>>();
  public afterCancel: Observable<CustomEvent<void>> = this._afterCancel.asObservable();

  public componentInstance: BusyIndicatorComponent;

  constructor(instance: BusyIndicatorComponent) {
    this._elementRef = new ElementRef(instance);
    if (instance.cancelable) {
      instance.addEventListener('forge-ext-busy-indicator-cancel', evt => this._afterCancel.next(evt));
    }
  }

  public hide(): void {
    this.nativeElement.open = false;
    this.nativeElement.remove();
    this._afterCancel.complete();
  }

  public get nativeElement(): BusyIndicatorComponent {
    return this._elementRef.nativeElement;
  }
}
