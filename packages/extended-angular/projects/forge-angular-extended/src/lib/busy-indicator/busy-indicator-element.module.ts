import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineBusyIndicatorElementComponent } from '@tylertech/forge-extended';

import { BusyIndicatorElement } from './busy-indicator-element.component';

@NgModule({
	imports: [CommonModule],
	declarations: [BusyIndicatorElement],
	exports: [BusyIndicatorElement]
})
export class ForgeExtendedBusyIndicatorModule {
	constructor() {
		defineBusyIndicatorElementComponent();
	}
}