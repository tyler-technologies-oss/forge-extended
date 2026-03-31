import { Component, inject } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconInfo } from '@tylertech/tyler-icons';
import { AppLayoutStateService } from '../../../services/app-layout-state.service';

IconRegistry.define([tylIconInfo]);

@Component({
  selector: 'app-app-layout-demo',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: false
})
export class AppLayoutDemoComponent {
  public readonly appLayoutState = inject(AppLayoutStateService);
}
