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
  BusyIndicatorComponent as BusyIndicatorComponentCustomElement,
  defineBusyIndicatorComponent
} from '@tylertech/forge-extended';

/**  */
@Component({
  selector: 'forge-ext-busy-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BusyIndicatorComponent {
  /** The forge-ext-busy-indicator element. */
  public readonly nativeElement = this.elementRef.nativeElement;

  /** Indicates whether the busy indicator is open. */
  @Input({ transform: booleanAttribute })
  public set open(value: BusyIndicatorComponentCustomElement['open']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.open = value;
    });
  }
  public get open(): BusyIndicatorComponentCustomElement['open'] {
    return this.nativeElement.open;
  }

  /** Whether the busy indicator is fullscreen or inline. */
  @Input()
  public set mode(value: BusyIndicatorComponentCustomElement['mode']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.mode = value;
    });
  }
  public get mode(): BusyIndicatorComponentCustomElement['mode'] {
    return this.nativeElement.mode;
  }

  /** The title text to display. */
  @Input()
  public set titleText(value: BusyIndicatorComponentCustomElement['titleText']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.titleText = value;
    });
  }
  public get titleText(): BusyIndicatorComponentCustomElement['titleText'] {
    return this.nativeElement.titleText;
  }

  /** The message to display. */
  @Input()
  public set message(value: BusyIndicatorComponentCustomElement['message']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.message = value;
    });
  }
  public get message(): BusyIndicatorComponentCustomElement['message'] {
    return this.nativeElement.message;
  }

  /** The accessible label for dialog. */
  @Input()
  public set label(value: BusyIndicatorComponentCustomElement['label']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.label = value;
    });
  }
  public get label(): BusyIndicatorComponentCustomElement['label'] {
    return this.nativeElement.label;
  }

  /** The accessible description for dialog. */
  @Input()
  public set description(value: BusyIndicatorComponentCustomElement['description']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.description = value;
    });
  }
  public get description(): BusyIndicatorComponentCustomElement['description'] {
    return this.nativeElement.description;
  }

  /** Indicates whether the cancel button is displayed. */
  @Input({ transform: booleanAttribute })
  public set cancelable(value: BusyIndicatorComponentCustomElement['cancelable']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.cancelable = value;
    });
  }
  public get cancelable(): BusyIndicatorComponentCustomElement['cancelable'] {
    return this.nativeElement.cancelable;
  }

  /**
   * The variant of the busy indicator.
   * - `spinner` (default): displays a spinner.
   * - `progress`: displays a progress bar.
   * - `message-only`: No progress indicator is displayed.
   */
  @Input()
  public set variant(value: BusyIndicatorComponentCustomElement['variant']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.variant = value;
    });
  }
  public get variant(): BusyIndicatorComponentCustomElement['variant'] {
    return this.nativeElement.variant;
  }

  /** Indicates whether the loading indicator is determinate. */
  @Input({ transform: booleanAttribute })
  public set determinate(value: BusyIndicatorComponentCustomElement['determinate']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.determinate = value;
    });
  }
  public get determinate(): BusyIndicatorComponentCustomElement['determinate'] {
    return this.nativeElement.determinate;
  }

  /** The progress amount for the progress bar. */
  @Input({ transform: numberAttribute })
  public set progress(value: BusyIndicatorComponentCustomElement['progress']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.progress = value;
    });
  }
  public get progress(): BusyIndicatorComponentCustomElement['progress'] {
    return this.nativeElement.progress;
  }

  /** The buffer amount for the progress bar. */
  @Input({ transform: numberAttribute })
  public set buffer(value: BusyIndicatorComponentCustomElement['buffer']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.buffer = value;
    });
  }
  public get buffer(): BusyIndicatorComponentCustomElement['buffer'] {
    return this.nativeElement.buffer;
  }

  /** Indicates whether the busy indicator surface should be transparent (no background or elevation). */
  @Input({ transform: booleanAttribute })
  public set transparent(value: BusyIndicatorComponentCustomElement['transparent']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.transparent = value;
    });
  }
  public get transparent(): BusyIndicatorComponentCustomElement['transparent'] {
    return this.nativeElement.transparent;
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    protected elementRef: ElementRef<BusyIndicatorComponentCustomElement>,
    protected zone: NgZone
  ) {
    defineBusyIndicatorComponent();
    changeDetectorRef.detach();
  }
}
