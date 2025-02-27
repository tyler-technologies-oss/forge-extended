// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import {
  booleanAttribute,
  Component,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
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

  /** Maps to the internal toolbar auto-height attribute */
  @Input({ transform: booleanAttribute })
  public set autoHeight(value: ResponsiveToolbarComponentCustomElement['autoHeight']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.autoHeight = value;
    });
  }
  public get autoHeight(): ResponsiveToolbarComponentCustomElement['autoHeight'] {
    return this.nativeElement.autoHeight;
  }

  /** Maps to the internal toolbar no-border attribute */
  @Input({ transform: booleanAttribute })
  public set noBorder(value: ResponsiveToolbarComponentCustomElement['noBorder']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.noBorder = value;
    });
  }
  public get noBorder(): ResponsiveToolbarComponentCustomElement['noBorder'] {
    return this.nativeElement.noBorder;
  }

  /** Maps to the internal toolbar inverted attribute */
  @Input({ transform: booleanAttribute })
  public set inverted(value: ResponsiveToolbarComponentCustomElement['inverted']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.inverted = value;
    });
  }
  public get inverted(): ResponsiveToolbarComponentCustomElement['inverted'] {
    return this.nativeElement.inverted;
  }

  /** Element refs that are used to calculate the overflow of the title and actions */
  @Input()
  public set startSlotContainer(value: ResponsiveToolbarComponentCustomElement['startSlotContainer']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.startSlotContainer = value;
    });
  }
  public get startSlotContainer(): ResponsiveToolbarComponentCustomElement['startSlotContainer'] {
    return this.nativeElement.startSlotContainer;
  }

  @Input()
  public set endSlotContainer(value: ResponsiveToolbarComponentCustomElement['endSlotContainer']) {
    this.zone.runOutsideAngular(() => {
      this.nativeElement.endSlotContainer = value;
    });
  }
  public get endSlotContainer(): ResponsiveToolbarComponentCustomElement['endSlotContainer'] {
    return this.nativeElement.endSlotContainer;
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
