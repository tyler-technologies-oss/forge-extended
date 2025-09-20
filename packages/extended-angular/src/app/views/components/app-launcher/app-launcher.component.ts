import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import {
  tylIconPayment,
  tylIconAdminPanelSettings,
  tylIconSecurity,
  tylIconBatchPrediction,
  tylIconSettingsSystemDaydream,
  tylIconAccountBalance,
  tylIconDashboard,
  tylIconCalculate,
  tylIconReportProblem,
  tylIconHomeWork
} from '@tylertech/tyler-icons';
import { AppLauncherOption } from '@tylertech/forge-extended';

IconRegistry.define([
  tylIconPayment,
  tylIconAdminPanelSettings,
  tylIconSecurity,
  tylIconBatchPrediction,
  tylIconSettingsSystemDaydream,
  tylIconAccountBalance,
  tylIconDashboard,
  tylIconCalculate,
  tylIconReportProblem,
  tylIconHomeWork
]);

@Component({
  selector: 'app-app-launcher-demo',
  templateUrl: './app-launcher.component.html',
  styleUrls: ['./app-launcher.component.scss'],
  standalone: false
})
export class AppLauncherDemoComponent {
  public breakpoint = 768;

  // Full app data for main demo
  public allApps: AppLauncherOption[] = [
    {
      label: 'Cashiering',
      iconName: 'payment',
      uri: 'https://demo.ci.cashiering.tylerapp.com/cashiering/ui',
      target: '_blank'
    },
    {
      label: 'Enterprise Justice',
      iconName: 'account_balance',
      uri: 'https://demo.ci.hub.tylerapp.com/main',
      target: '_blank'
    },
    {
      label: 'Hub',
      iconName: 'dashboard',
      uri: 'https://demo.ci.hub.tylerapp.com/main',
      target: '_blank'
    },
    {
      label: 'Enterprise Assessment & Tax',
      iconName: 'calculate',
      uri: 'https://demo.ci.hub.tylerapp.com/main',
      target: '_blank'
    },
    {
      label: 'Enterprise Service Requests',
      iconName: 'report_problem',
      uri: 'https://demo.ci.esr.tylerapp.com/search',
      target: '_blank'
    },
    {
      label: 'Enterprise Permitting & Licensing',
      iconName: 'home_work',
      uri: 'https://demo.ci.energov.tylerdev.io/epl/energov-shell/',
      target: '_blank'
    }
  ];

  public relatedApps: AppLauncherOption[] = [
    {
      label: 'Payments Administration',
      iconName: 'payment',
      uri: 'http://www.google.com',
      target: '_blank'
    },
    {
      label: 'PEP Administration',
      iconName: 'admin_panel_settings',
      uri: 'http://www.google.com',
      target: '_blank'
    },
    {
      label: 'Permissions',
      iconName: 'security',
      uri: 'http://www.google.com',
      target: '_blank'
    },
    {
      label: 'Batch Integration',
      iconName: 'batch_prediction',
      uri: 'http://www.google.com',
      target: '_blank'
    },
    {
      label: 'System Integration',
      iconName: 'settings_system_daydream',
      uri: 'http://www.google.com',
      target: '_blank'
    }
  ];

  // Simplified data for basic demo
  public basicAllApps: AppLauncherOption[] = [
    {
      label: 'Cashiering',
      iconName: 'payment',
      uri: '#'
    },
    {
      label: 'Hub',
      iconName: 'dashboard',
      uri: '#'
    },
    {
      label: 'Enterprise Justice',
      iconName: 'account_balance',
      uri: '#'
    }
  ];

  public basicRelatedApps: AppLauncherOption[] = [
    {
      label: 'Payments Administration',
      iconName: 'payment',
      uri: '#'
    },
    {
      label: 'Permissions',
      iconName: 'security',
      uri: '#'
    }
  ];

  public onAppClick(event: CustomEvent): void {
    const app = event.detail;
    console.log('App clicked:', app);
  }
}
