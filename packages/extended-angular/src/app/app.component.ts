import { Component, inject } from '@angular/core';
import { AppLayoutStateService } from './services/app-layout-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  readonly appLayoutState = inject(AppLayoutStateService);

  public isDrawerOpen = false;
  public canCloseDrawer = false;

  public onMenuClicked(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
