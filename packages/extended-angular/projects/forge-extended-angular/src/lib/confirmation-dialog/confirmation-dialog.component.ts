// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import {
  booleanAttribute,
  Component,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
  Input,
  inject
} from '@angular/core';
import {
  ConfirmationDialogComponent as ConfirmationDialogComponentCustomElement,
  defineConfirmationDialogComponent
} from '@tylertech/forge-extended';

/**  */
@Component({
  selector: 'forge-confirmation-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  standalone: false
})
export class ConfirmationDialogComponent {
  protected elementRef = inject<ElementRef<ConfirmationDialogComponentCustomElement>>(ElementRef);
  protected zone = inject(NgZone);

  /** The forge-confirmation-dialog element. */
  public readonly nativeElement = this.elementRef.nativeElement;

  /** Indicates whether the confirmation dialog is open */
  @Input({ transform: booleanAttribute })
  public set open(value: ConfirmationDialogComponentCustomElement['open']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.open = value;
    });
  }
  public get open(): ConfirmationDialogComponentCustomElement['open'] {
    return this.nativeElement.open;
  }

  /** The accessible label for dialog */
  @Input()
  public set label(value: ConfirmationDialogComponentCustomElement['label']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.label = value;
    });
  }
  public get label(): ConfirmationDialogComponentCustomElement['label'] {
    return this.nativeElement.label;
  }

  /** The accessible description for dialog */
  @Input()
  public set description(value: ConfirmationDialogComponentCustomElement['description']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.description = value;
    });
  }
  public get description(): ConfirmationDialogComponentCustomElement['description'] {
    return this.nativeElement.description;
  }

  /** Indicates whether the confirmation dialog is in a busy state */
  @Input({ transform: booleanAttribute })
  public set isBusy(value: ConfirmationDialogComponentCustomElement['isBusy']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.isBusy = value;
    });
  }
  public get isBusy(): ConfirmationDialogComponentCustomElement['isBusy'] {
    return this.nativeElement.isBusy;
  }

  /** ARIA label for the the busy indicator when loading */
  @Input()
  public set busyLabel(value: ConfirmationDialogComponentCustomElement['busyLabel']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.busyLabel = value;
    });
  }
  public get busyLabel(): ConfirmationDialogComponentCustomElement['busyLabel'] {
    return this.nativeElement.busyLabel;
  }

  constructor() {
    defineConfirmationDialogComponent();
    const changeDetectorRef = inject(ChangeDetectorRef);
    changeDetectorRef.detach();
  }
}
