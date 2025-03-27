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
  ResponsiveToolbarComponent as ResponsiveToolbarComponentCustomElement,
  defineResponsiveToolbarComponent
} from '@tylertech/forge-extended';

/**  */
@Component({
  selector: 'forge-responsive-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ResponsiveToolbarComponent {
  /** The forge-responsive-toolbar element. */
  public readonly nativeElement = this.elementRef.nativeElement;

  /** Hides the divider */
  @Input({ transform: booleanAttribute })
  public set noBorder(value: ResponsiveToolbarComponentCustomElement['noBorder']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.noBorder = value;
    });
  }
  public get noBorder(): ResponsiveToolbarComponentCustomElement['noBorder'] {
    return this.nativeElement.noBorder;
  }

  /** Controls whether a bottom divider (default) or top divider (true) is used. */
  @Input({ transform: booleanAttribute })
  public set inverted(value: ResponsiveToolbarComponentCustomElement['inverted']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.inverted = value;
    });
  }
  public get inverted(): ResponsiveToolbarComponentCustomElement['inverted'] {
    return this.nativeElement.inverted;
  }

  /** Controls the delay in milliseconds to throttle resize events */
  @Input({ transform: numberAttribute })
  public set resizeDelay(value: ResponsiveToolbarComponentCustomElement['resizeDelay']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.resizeDelay = value;
    });
  }
  public get resizeDelay(): ResponsiveToolbarComponentCustomElement['resizeDelay'] {
    return this.nativeElement.resizeDelay;
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    protected elementRef: ElementRef<ResponsiveToolbarComponentCustomElement>,
    protected zone: NgZone
  ) {
    defineResponsiveToolbarComponent();
    changeDetectorRef.detach();
  }
}
