import { Location } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { IExpansionPanelComponent, IconRegistry } from '@tylertech/forge';
import { tylIconHome, tylIconSettings, tylIconSettingsInputComponent } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconHome, tylIconSettingsInputComponent, tylIconSettings]);

export interface IMenuItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-sidenav',
  styleUrls: ['./sidenav.component.scss'],
  templateUrl: './sidenav.component.html',
  standalone: false
})
export class SidenavComponent implements AfterViewInit {
  private _location = inject(Location);
  private _cd = inject(ChangeDetectorRef);

  public selectedPath: string;

  @ViewChild('componentExpansionPanel', { static: false, read: ElementRef })
  public componentExpansionPanel: ElementRef<IExpansionPanelComponent>;

  public componentMenuItems: IMenuItem[] = [
    { label: 'App Launcher', value: '/component/app-launcher' },
    { label: 'App Layout', value: '/component/app-layout' },
    { label: 'Busy Indicator', value: '/component/busy-indicator' },
    { label: 'Confirmation Dialog', value: '/component/confirmation-dialog' },
    { label: 'Count Card', value: '/component/count-card' },
    { label: 'Multi Select Header', value: '/component/multi-select-header' },
    { label: 'Quantity Field', value: '/component/quantity-field' },
    { label: 'Responsive Toolbar', value: '/component/responsive-toolbar' },
    { label: 'Structured Card', value: '/component/structured-card' },
    { label: 'User Profile', value: '/component/user-profile' }
  ];

  constructor() {}

  public ngAfterViewInit(): void {
    const path = this._location.path() || '/';
    this.selectedPath = path;
    this._cd.detectChanges();

    // Automatically expand a menu item if the active menu item exists within it
    if (path.match(/^\/component\//)) {
      this.componentExpansionPanel.nativeElement.open = true;
    }
  }
}
