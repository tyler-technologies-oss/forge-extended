import { Component, inject } from '@angular/core';
import { AppLayoutStateService } from './services/app-layout-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  public readonly appLayoutState = inject(AppLayoutStateService);
}
