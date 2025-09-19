import { IconRegistry } from '@tylertech/forge';
import { AppLauncherOption } from '@tylertech/forge-extended';
import { ForgeAppLauncher, ForgeCustomLink } from '@tylertech/forge-extended-react';
import {
  tylIconPayment,
  tylIconAccountBalance,
  tylIconDashboard,
  tylIconCalculate,
  tylIconReportProblem,
  tylIconHomeWork,
  tylIconSecurity,
  tylIconAdminPanelSettings,
  tylIconBatchPrediction
} from '@tylertech/tyler-icons';
import { useState } from 'react';

IconRegistry.define([
  tylIconPayment,
  tylIconAccountBalance,
  tylIconDashboard,
  tylIconCalculate,
  tylIconReportProblem,
  tylIconHomeWork,
  tylIconSecurity,
  tylIconAdminPanelSettings,
  tylIconBatchPrediction
]);

const allAppsData = [
  { label: 'Cashiering', iconName: 'payment', uri: 'https://example.com/cashiering' },
  { label: 'Enterprise Justice', iconName: 'account_balance', uri: 'https://example.com/justice' },
  { label: 'Hub', iconName: 'dashboard', uri: 'https://example.com/hub' },
  { label: 'Enterprise Assessment & Tax', iconName: 'calculate', uri: 'https://example.com/assessment' },
  { label: 'Enterprise Service Requests', iconName: 'report_problem', uri: 'https://example.com/service-requests' },
  { label: 'Enterprise Permitting & Licensing', iconName: 'home_work', uri: 'https://example.com/permitting' }
] as AppLauncherOption[];

const relatedAppsData = [
  {
    label: 'Payments Administration',
    iconName: 'payment',
    uri: 'https://example.com/payments-admin',
    target: '_blank'
  },
  {
    label: 'PEP Administration',
    iconName: 'admin_panel_settings',
    uri: 'https://example.com/pep-admin',
    target: '_blank'
  },
  { label: 'Permissions', iconName: 'security', uri: 'https://example.com/permissions', target: '_blank' },
  { label: 'Batch Integration', iconName: 'batch_prediction', uri: 'https://example.com/batch', target: '_blank' }
] as AppLauncherOption[];

export function AppLauncherDemo(): JSX.Element {
  const [allApps] = useState(allAppsData);
  const [relatedApps] = useState(relatedAppsData);

  return (
    <>
      <h2 className="forge-typography--subheading4">App Launcher</h2>
      <ForgeAppLauncher allApps={allApps} relatedApps={relatedApps}>
        <span slot="related-apps-title">Related apps</span>
        <span slot="all-apps-title">All apps</span>
        <span slot="view-all-apps-button-text">View all apps</span>
        <span slot="custom-links-title">Custom links</span>
        <ForgeCustomLink slot="custom-link">
          <a href="https://example.com/docs" target="_blank">
            Documentation
          </a>
        </ForgeCustomLink>
        <ForgeCustomLink slot="custom-link">
          <a href="https://example.com/faq" target="_blank">
            FAQ
          </a>
        </ForgeCustomLink>
      </ForgeAppLauncher>
    </>
  );
}
