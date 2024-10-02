// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { QuantityFieldElement as QuantityFieldElementCustomElement, defineQuantityFieldElementComponent } from '@tylertech/forge-extended';

/**  */
@Component({
  selector: 'forge-quantity-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class QuantityFieldElement {

	/** The forge-quantity-field element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Indicates whether the field is invalid. */
	@Input({ transform: booleanAttribute })
	public set invalid(value: QuantityFieldElementCustomElement['invalid']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.invalid = value;
		});
	}
	public get invalid(): QuantityFieldElementCustomElement['invalid'] {
		return this.nativeElement.invalid;
	}

	/** Indicates whether the field is required. */
	@Input({ transform: booleanAttribute })
	public set required(value: QuantityFieldElementCustomElement['required']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.required = value;
		});
	}
	public get required(): QuantityFieldElementCustomElement['required'] {
		return this.nativeElement.required;
	}

	/** The accessible label for the decrement button. */
	@Input()
	public set decrementLabel(value: QuantityFieldElementCustomElement['decrementLabel']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.decrementLabel = value;
		});
	}
	public get decrementLabel(): QuantityFieldElementCustomElement['decrementLabel'] {
		return this.nativeElement.decrementLabel;
	}

	/** The accessible label for the increment button. */
	@Input()
	public set incrementLabel(value: QuantityFieldElementCustomElement['incrementLabel']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.incrementLabel = value;
		});
	}
	public get incrementLabel(): QuantityFieldElementCustomElement['incrementLabel'] {
		return this.nativeElement.incrementLabel;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<QuantityFieldElementCustomElement>,
		protected zone: NgZone
	) {
		defineQuantityFieldElementComponent();
		changeDetectorRef.detach();
	}
}
