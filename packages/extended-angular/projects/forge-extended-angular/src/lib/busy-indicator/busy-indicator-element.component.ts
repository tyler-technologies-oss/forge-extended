// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import {
  booleanAttribute,
  Component,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
  numberAttribute,
  Input
} from '@angular/core';
import {
  BusyIndicatorElement as BusyIndicatorElementCustomElement,
  defineBusyIndicatorElementComponent
} from '@tylertech/forge-extended';

/**  */
@Component({
  selector: 'forge-busy-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BusyIndicatorElement {
  /** The forge-busy-indicator element. */
  public readonly nativeElement = this.elementRef.nativeElement;

  /** Indicates whether the busy indicator is open. */
  @Input({ transform: booleanAttribute })
  public set open(value: BusyIndicatorElementCustomElement['open']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.open = value;
    });
  }
  public get open(): BusyIndicatorElementCustomElement['open'] {
    return this.nativeElement.open;
  }

  /** The title text to display. */
  @Input()
  public set titleText(value: BusyIndicatorElementCustomElement['titleText']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.titleText = value;
    });
  }
  public get titleText(): BusyIndicatorElementCustomElement['titleText'] {
    return this.nativeElement.titleText;
  }

  /** The message to display. */
  @Input()
  public set message(value: BusyIndicatorElementCustomElement['message']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.message = value;
    });
  }
  public get message(): BusyIndicatorElementCustomElement['message'] {
    return this.nativeElement.message;
  }

  /** Indicates whether the cancel button is displayed. */
  @Input({ transform: booleanAttribute })
  public set cancelable(value: BusyIndicatorElementCustomElement['cancelable']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.cancelable = value;
    });
  }
  public get cancelable(): BusyIndicatorElementCustomElement['cancelable'] {
    return this.nativeElement.cancelable;
  }

  /** Indicates whether the spinner is displayed. */
  @Input({ transform: booleanAttribute })
  public set spinner(value: BusyIndicatorElementCustomElement['spinner']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.spinner = value;
    });
  }
  public get spinner(): BusyIndicatorElementCustomElement['spinner'] {
    return this.nativeElement.spinner;
  }

  /** Indicates whether the progress bar is displayed. */
  @Input({ transform: booleanAttribute })
  public set progressBar(value: BusyIndicatorElementCustomElement['progressBar']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.progressBar = value;
    });
  }
  public get progressBar(): BusyIndicatorElementCustomElement['progressBar'] {
    return this.nativeElement.progressBar;
  }

  /** Indicates whether the progress bar is determinate. */
  @Input({ transform: booleanAttribute })
  public set progressBarDeterminate(value: BusyIndicatorElementCustomElement['progressBarDeterminate']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.progressBarDeterminate = value;
    });
  }
  public get progressBarDeterminate(): BusyIndicatorElementCustomElement['progressBarDeterminate'] {
    return this.nativeElement.progressBarDeterminate;
  }

  /** The progress amount for the progress bar. */
  @Input({ transform: numberAttribute })
  public set progress(value: BusyIndicatorElementCustomElement['progress']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.progress = value;
    });
  }
  public get progress(): BusyIndicatorElementCustomElement['progress'] {
    return this.nativeElement.progress;
  }

  /** The buffer amount for the progress bar. */
  @Input({ transform: numberAttribute })
  public set buffer(value: BusyIndicatorElementCustomElement['buffer']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.buffer = value;
    });
  }
  public get buffer(): BusyIndicatorElementCustomElement['buffer'] {
    return this.nativeElement.buffer;
  }

  /** The layout direction of the busy indicator. */
  @Input()
  public set direction(value: BusyIndicatorElementCustomElement['direction']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.direction = value;
    });
  }
  public get direction(): BusyIndicatorElementCustomElement['direction'] {
    return this.nativeElement.direction;
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    protected elementRef: ElementRef<BusyIndicatorElementCustomElement>,
    protected zone: NgZone
  ) {
    defineBusyIndicatorElementComponent();
    changeDetectorRef.detach();
  }
}
