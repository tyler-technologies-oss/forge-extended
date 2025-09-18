import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFavorite, tylIconGridView } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconFavorite, tylIconGridView]);

@Component({
  selector: 'app-app-launcher-demo',
  templateUrl: './app-launcher.component.html',
  styleUrls: ['./app-launcher.component.scss'],
  standalone: false
})
export class AppLauncherDemoComponent {
  public appData = [
    {
      id: 'app-1',
      name: 'Tyler ERP',
      description: 'Enterprise Resource Planning',
      icon: 'grid_view',
      url: 'https://example.com/erp',
      category: 'Business'
    },
    {
      id: 'app-2',
      name: 'Tyler CRM',
      description: 'Customer Relationship Management',
      icon: 'favorite',
      url: 'https://example.com/crm',
      category: 'Business'
    },
    {
      id: 'app-3',
      name: 'Tyler Analytics',
      description: 'Business Intelligence Dashboard',
      icon: 'grid_view',
      url: 'https://example.com/analytics',
      category: 'Analytics'
    },
    {
      id: 'app-4',
      name: 'Tyler HR',
      description: 'Human Resources Management',
      icon: 'favorite',
      url: 'https://example.com/hr',
      category: 'Business'
    }
  ];

  public customLinks = [
    {
      id: 'custom-1',
      label: 'Add New Application',
      icon: 'grid_view',
      action: () => this.onAddNewApp()
    },
    {
      id: 'custom-2',
      label: 'Manage Applications',
      icon: 'favorite',
      action: () => this.onManageApps()
    }
  ];

  public onAppClick(event: CustomEvent): void {
    const app = event.detail;
    console.log('App clicked:', app);
  }

  public onAddNewApp(): void {
    console.log('Add new application clicked');
  }

  public onManageApps(): void {
    console.log('Manage applications clicked');
  }
}