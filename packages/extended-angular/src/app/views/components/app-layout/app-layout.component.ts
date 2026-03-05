import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import {
  tylIconHome,
  tylIconPerson,
  tylIconSettings,
  tylIconDashboard,
  tylIconNotifications
} from '@tylertech/tyler-icons';

IconRegistry.define([tylIconHome, tylIconPerson, tylIconSettings, tylIconDashboard, tylIconNotifications]);

@Component({
  selector: 'app-app-layout-demo',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: false
})
export class AppLayoutDemoComponent {
  public appTitle = 'My Application';
  public breakpoint = 960;
  public useMiniDrawer = false;
  public miniHover = false;
  public viewport = false;
}
