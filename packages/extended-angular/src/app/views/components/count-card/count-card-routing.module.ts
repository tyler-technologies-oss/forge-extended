import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountCardDemoComponent } from './count-card.component';

const routes: Routes = [{ path: '', component: CountCardDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountCardRoutingModule {}
