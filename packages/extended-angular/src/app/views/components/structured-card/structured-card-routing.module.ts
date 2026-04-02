import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuredCardDemoComponent } from './structured-card.component';

const routes: Routes = [{ path: '', component: StructuredCardDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuredCardRoutingModule {}
