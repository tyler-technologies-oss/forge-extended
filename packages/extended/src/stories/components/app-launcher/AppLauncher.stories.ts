import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import icons from './icons.json';

import '$lib/app-launcher';
import { AppLauncherCustomLink, AppLauncherOption } from '$lib/app-launcher';

const component = 'forge-app-launcher';

const selectRandomIconForDemo = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex].name;
};

const customLinks: AppLauncherCustomLink[] = [
  {
    label: 'Payments Documentation',
    uri: 'https://www.google.com'
  },
  {
    label: 'Frequently Asked Questions',
    uri: 'http://www.google.com'
  },
  {
    label: 'Community Services Directory',
    uri: 'http://www.google.com'
  },
  {
    label: 'Another Custom Link',
    uri: 'http://www.google.com'
  },
  {
    label: 'Another Custom Link',
    uri: 'http://www.google.com'
  },
  {
    label: 'Another Custom Link',
    uri: 'http://www.google.com'
  },
  {
    label: 'Another Custom Link',
    uri: 'http://www.google.com'
  }
];

const data = [
  {
    admin: false,
    showProductBage: false,
    applicationName: 'ACFR Statement Builder',
    applicationID: 'CAFRSBDashboard',
    label: 'ACFR Statement Builder',
    helpText: 'Develop and publish annual comprehensive financial report',
    icon: {
      type: 'image',
      uri: 'https://demo.tcpci.com/acfr/dashboard/images/application-icon.svg',
      name: '/acfr/dashboard/images/application-icon.svg'
    },
    uri: 'https://demo.tcpci.com/acfr/dashboard',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'ACFR Statement Builder'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'ACFRSB Roles Administration',
    applicationID: 'CAFRSBRoles',
    label: 'ACFRSB Role Administration',
    helpText: 'Administer ACFRSB Roles',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'settings'
    },
    uri: 'https://demo.tcpci.com/acfr/roles',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 2,
    product: 'ACFR Statement Builder'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Administration & Support',
    applicationID: 'administration-and-support',
    label: 'Administration & Support',
    helpText: 'Automate and track correspondence',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/headset_mic.svg',
      name: 'Administration & Support Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Administration & Support'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Agency Intelligence',
    applicationID: 'agency-intelligence',
    label: 'Agency Intelligence',
    helpText: 'Collect, analyze and act on multiple data sets ',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/brain.svg',
      name: 'Agency Intelligence Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Agency Intelligence'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Alliance Community Builder',
    applicationID: 'alliance-community-builder',
    label: 'Alliance Community Builder',
    helpText: 'Agencies ',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/reduce_capacity.svg',
      name: 'Alliance Community Builder Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Alliance Community Builder'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Assessment & Tax Plus',
    applicationID: 'assessment-and-tax-plus',
    label: 'Assessment & Tax Plus',
    helpText: 'Law Enforcement',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/calculate.svg',
      name: 'Assessment & Tax Plus Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Assessment & Tax Plus'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Assessment & Tax Pro',
    applicationID: 'assessment-and-tax-pro',
    label: 'Assessment & Tax Pro',
    helpText: 'Use Cases ',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/calculate.svg',
      name: 'Assessment & Tax Pro   Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Assessment & Tax Pro  '
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Assets Mobile',
    applicationID: 'assets-mobile',
    label: 'Assets Mobile',
    helpText: 'To submit Criminal and Quasi-Criminal e-filings.  ',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/phonelink_setup.svg',
      name: 'Assets Mobile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Assets Mobile'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'CA Valuation',
    applicationID: 'ca-valuation',
    label: 'CA Valuation',
    helpText: 'California-specific valuation solution',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/calculate.svg',
      name: 'CA Valuation Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'CA Valuation'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Cannabis Licensing',
    applicationID: 'cannabis-licensing',
    label: 'Cannabis Licensing',
    helpText: 'Integrated solution from licensing through registration',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/cannabis.svg',
      name: 'Cannabis Licensing   Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Cannabis Licensing  '
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Cashiering',
    applicationID: 'cashiering-webui',
    label: 'Cashiering',
    helpText: 'Point of sale payment collection and cashiering solution.',
    icon: {
      type: 'Image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/account_cash.svg',
      name: 'Cashiering Icon'
    },
    uri: 'https://demo.ci.cashiering.tylerapp.com/cashiering/ui',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Cashiering'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Cashiering Administration',
    applicationID: 'cashiering-webui-admin',
    label: 'Cashiering Administration',
    helpText: 'Administer the Cashiering product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'application'
    },
    uri: 'https://demo.ci.cashiering.tylerapp.com/cashiering/ui/admin.administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Cashiering'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Citizen Connect',
    applicationID: 'citizen-connect',
    label: 'Citizen Connect',
    helpText: 'A citizen-facing map application for monitoring public data in a neighborhood.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/custom/town_hall_citizen_connection.svg',
      name: 'Citizen Connect Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Citizen Connect'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Community Service Administration',
    applicationID: 'community-service-administration',
    label: 'Community Service Administration',
    helpText: 'Administer the Community Service Directory',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'application'
    },
    uri: 'https://demo.tcpci.com/community-service-directory/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 0,
    product: 'Community Service Directory'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Community Service Configuration',
    applicationID: 'community-service-configuration',
    label: 'Community Service Configuration',
    helpText: 'Configure the Community Service Directory',
    icon: {
      type: 'image',
      uri: 'https://demo.tcpci.com/community-service-directory/configuration/images/application-icon.png',
      name: 'Community Service Configuration icon'
    },
    uri: 'https://demo.tcpci.com/community-service-directory/configuration',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Community Service Directory'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Content Manager',
    applicationID: 'content-manager',
    label: 'Content Manager',
    helpText: 'Capture, deliver, manage, and archive electronic information in Tyler solutions',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/usb_flash_drive.svg',
      name: 'Content Manager Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Content Manager'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Court Data API',
    applicationID: 'court-data-api',
    label: 'Court Data API',
    helpText: 'A service that we offer to 3rd parties to get case information, court documents, and case alerts.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/.svg',
      name: 'Court Data API Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Court Data API'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Data Collect Mobile',
    applicationID: 'data-collect-mobile',
    label: 'Data Collect Mobile',
    helpText: 'Collect data in the field as part of an overall workflow',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/account_tree.svg',
      name: 'Data Collect Mobile  Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Data Collect Mobile '
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'ewarrants',
    applicationID: 'ewarrants',
    label: 'E-Warrants',
    helpText: 'Manage warrants',
    icon: {
      type: 'font',
      name: 'application'
    },
    uri: 'https://demo.tcpci.com/ewarrants/law-enforcement/',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'E-Warrants'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'erpcloudops-ecopoc-app',
    applicationID: 'erpcloudops-ecopoc-app',
    label: 'ECO PoC App',
    helpText: 'ECO PoC App',
    icon: {
      type: 'Image',
      uri: 'https://demo.tcpci.com/cloudops/poc-app/images/application-icon.svg',
      name: 'web_asset'
    },
    uri: 'https://demo.tcpci.com/cloudops/poc-app',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'ECO PoC App'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'eFile & Serve',
    applicationID: 'efile-and-serve',
    label: 'eFile & Serve',
    helpText: 'Court filing for self-represented litigants',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/drive_file_move.svg',
      name: 'eFile & Serve Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'eFile & Serve'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Electronic Discovery',
    applicationID: 'electronic-discovery',
    label: 'Electronic Discovery',
    helpText: 'Submit evidence for prosecutors to review and release to defense attorneys',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/rule_folder.svg',
      name: 'Electronic Discovery Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Electronic Discovery'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Electronic Warrants',
    applicationID: 'electronic-warrants',
    label: 'Electronic Warrants',
    helpText: 'Submit and process warrant requests any time, day or night',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/certificate.svg',
      name: 'Electronic Warrants Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Electronic Warrants'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Employee Access',
    applicationID: 'TESP.EmployeeSelfService',
    label: 'Employee Access',
    helpText: 'Employee Access Application',
    icon: {
      type: 'image',
      uri: 'https://demo.tcpci.com/tesp/employee-selfservice/images/ess_icon.svg',
      name: '/tesp/employee-selfservice/images/ess_icon.svg'
    },
    uri: 'https://demo.tcpci.com/tesp/employee-selfservice',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Employee Access'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enforcement Mobile',
    applicationID: 'enforcement-mobile',
    label: 'Enforcement Mobile',
    helpText: 'Complete solution for law enforcement in the field',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/smartphone.svg',
      name: 'Enforcement Mobile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enforcement Mobile'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Engagement Builder',
    applicationID: 'engagement-builder',
    label: 'Engagement Builder',
    helpText: 'Low-code form/application development platform',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/file_document.svg',
      name: 'Engagement Builder Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Engagement Builder'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Assessment & Tax',
    applicationID: 'enterprise-assessment-and-tax',
    label: 'Enterprise Assessment & Tax',
    helpText: 'Complete solution from appraisal through tax collection',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/calculate.svg',
      name: 'Enterprise Assessment & Tax Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise Assessment & Tax'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Assessment & Tax Standard',
    applicationID: 'enterprise-assessment-and-tax-standard',
    label: 'Enterprise Assessment & Tax Standard',
    helpText: 'Complete solution from appraisal through tax collection',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/calculate.svg',
      name: 'Enterprise Assessment & Tax Standard Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise Assessment & Tax Standard'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Asset Management',
    applicationID: 'enterprise-asset-management',
    label: 'Enterprise Asset Management',
    helpText: 'Manage physical assets and work management',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/fire_hydrant.svg',
      name: 'Enterprise Asset Management Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise Asset Management'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise CAD',
    applicationID: 'enterprise-public-safety',
    label: 'Enterprise CAD',
    helpText: 'Computer-aided Dispatch for Emergency Response',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/shield_outline.svg',
      name: 'Enterprise CAD Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise CAD'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Data Platform',
    applicationID: 'data-and-insights',
    label: 'Enterprise Data Platform',
    helpText: 'Data discovery, access and collaboration with a variety of stakeholders',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/chart_areaspline.svg',
      name: 'Enterprise Data Platform Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise Data Platform'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Environmental Health',
    applicationID: 'enterprise-environmental-health',
    label: 'Enterprise Environmental Health',
    helpText: 'Integrated environmental health inspection and compliance solution for state and local governments',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/policy.svg',
      name: 'Enterprise Environmental Health Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise Environmental Health'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Enterprise Forms Administration',
    applicationID: 'readyforms-administration',
    label: 'Enterprise Forms Administration',
    helpText: 'Administer the Enterprise Forms product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'admin_panel_settings'
    },
    uri: 'https://demo.ci.forms.tylerapp.com/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Enterprise Forms'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Forms Template Configuration',
    applicationID: 'readyforms-templateconfiguration',
    label: 'Enterprise Forms Template Configuration',
    helpText: 'Create and maintain templates',
    icon: {
      type: 'Image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/file_document_edit.svg',
      name: 'web_asset'
    },
    uri: 'https://demo.ci.forms.tylerapp.com/templateconfiguration',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Enterprise Forms'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Justice',
    applicationID: 'enterprise-justice',
    label: 'Enterprise Justice',
    helpText: 'Complete case management solution for county courts through statewide systems',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/account_balance.svg',
      name: 'Enterprise Justice Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise Justice'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Civic Access Admin',
    applicationID: 'energov-civic-access-admin',
    label: 'Civic Access Admin',
    helpText: 'Administer the Online constituent/public facing portal for Enterprise Permitting & Licensing',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'application'
    },
    uri: 'https://demo.ci.energov.tylerdev.io/epl/civic-access-admin',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Enterprise Permitting & Licensing'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Permitting & Licensing',
    applicationID: 'enterprise-permitting-&-licensing',
    label: 'Enterprise Permitting & Licensing',
    helpText: 'Comprehensive, Automated, Integrated Permitting & Licensing software for Local Government.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/home_work.svg',
      name: 'home_work'
    },
    uri: 'https://demo.ci.energov.tylerdev.io/epl/energov-shell/#/menu/user',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Enterprise Permitting & Licensing'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Enterprise Permitting & Licensing Administration',
    applicationID: 'enterprise-permitting-&-licensing-administration',
    label: 'Enterprise Permitting & Licensing Administration',
    helpText: 'Administer the Enterprise Permitting & Licensing product.',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'application'
    },
    uri: 'https://demo.ci.energov.tylerdev.io/epl/system-setup/admin-screens',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Enterprise Permitting & Licensing'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise Service Requests',
    applicationID: 'Tyler311-Search',
    label: 'Enterprise Service Requests',
    helpText: 'Integrated solution for non-emergency inquiries and complaints',
    icon: {
      type: 'Image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/report_problem.svg',
      name: 'web_asset'
    },
    uri: 'https://demo.ci.esr.tylerapp.com/search',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Enterprise Service Requests'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Enterprise Service Requests Administration',
    applicationID: 'Tyler311-Administration',
    label: 'Enterprise Service Requests Administration',
    helpText: 'Administer the Enterprise Service Requests product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'report_problem'
    },
    uri: 'https://demo.ci.esr.tylerapp.com/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Enterprise Service Requests'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Enterprise State Regulatory',
    applicationID: 'enterprise-state-regulatory',
    label: 'Enterprise State Regulatory',
    helpText: 'Enterprise State Regulatory (temp)',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/rule_folder.svg',
      name: 'Enterprise State Regulatory Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Enterprise State Regulatory'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'ERP Open API',
    applicationID: 'openapi-developerportal',
    label: 'ERP Open API',
    helpText: 'API documentation and services for EERP, EAM, and ESR.',
    icon: {
      type: 'Image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/settings.svg',
      name: 'web_asset'
    },
    uri: 'https://demo.ci.devportal.erp.tylerapp.com/main',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'ERP Open API'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'ERP Open API Administration',
    applicationID: 'openapi-administration',
    label: 'ERP Open API Administration',
    helpText: 'Administer the ERP Open API product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'admin_panel_settings'
    },
    uri: 'https://demo.ci.devportal.erp.tylerapp.com/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'ERP Open API'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'ERP Pro 10',
    applicationID: 'erp-pro-10',
    label: 'ERP Pro 10',
    helpText: 'Integrated enterprise resource planning solutions for local government',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/calculator.svg',
      name: 'ERP Pro 10 Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'ERP Pro 10'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'ERP Pro 9',
    applicationID: 'erp-pro',
    label: 'ERP Pro 9',
    helpText: 'Integrated enterprise resource planning solutions for local government',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/calculator.svg',
      name: 'ERP Pro 9 Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'ERP Pro 9'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Executive Insights',
    applicationID: 'efile-analytics',
    label: 'Executive Insights',
    helpText: 'Analytics application implemented across a wide range of Tyler product lines.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/insights.svg',
      name: 'Executive Insights Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Executive Insights'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Field Mobile',
    applicationID: 'field-mobile',
    label: 'Field Mobile',
    helpText: 'Mobile property data collection',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/.svg',
      name: 'Field Mobile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Field Mobile'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Fire Prevention Mobile',
    applicationID: 'fire-prevention-mobile',
    label: 'Fire Prevention Mobile',
    helpText: 'Fire inspection and pre-incident planning solution.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg//.svg',
      name: 'Fire Prevention Mobile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Fire Prevention Mobile'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'GeoServer',
    applicationID: 'TylerSpatial-GeoServer',
    label: 'GeoServer',
    helpText: 'Provides central map configuration and geocoding services for Tyler applications.',
    icon: {
      type: 'Image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/map.svg',
      name: 'web_asset'
    },
    uri: 'https://demo.ci.geoserver.tylerapp.com/main',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'GeoServer'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'GeoServer Administration',
    applicationID: 'TylerSpatial-Admin',
    label: 'GeoServer Administration',
    helpText: 'Administer the GeoServer product.',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'admin_panel_settings'
    },
    uri: 'https://demo.ci.geoserver.tylerapp.com/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'GeoServer'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Gov2Go',
    applicationID: 'gov2go',
    label: 'Gov2Go',
    helpText: 'Resident engagement services platform',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/custom/town_hall_citizen.svg',
      name: 'Gov2Go Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Gov2Go'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Hub',
    applicationID: 'TylerHub-Main',
    label: 'Hub',
    helpText: 'Role-based dashboard for job functions, processes and tasks',
    icon: {
      type: 'Image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/dashboard.svg',
      name: 'web_asset'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Hub'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Hub Administration',
    applicationID: 'TylerHub-Administration',
    label: 'Hub Administration',
    helpText: 'Administer the Hub product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'dashboard'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Hub'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Intelligent Services',
    applicationID: 'tyler-intelligence-services',
    label: 'Intelligent Services',
    helpText: 'PII redaction web service',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/smart_card.svg',
      name: 'Intelligent Services Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Intelligent Services'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Interactive Reporting',
    applicationID: 'interactive-reporting',
    label: 'Interactive Reporting',
    helpText: 'Reporting application implemented across a wide range of Tyler product lines.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/laser_pointer.svg',
      name: 'Interactive Reporting Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Interactive Reporting'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Inventory Mobile',
    applicationID: 'inventory-mobile',
    label: 'Inventory Mobile',
    helpText: 'Mobile inventory management solution integrated with Enterprise ERP',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/checklist.svg',
      name: 'Inventory Mobile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Inventory Mobile'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Jail Manager',
    applicationID: 'enterprise-corrections',
    label: 'Jail Manager',
    helpText: 'Complete solution from booking through re-entry',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/handcuffs.svg',
      name: 'Jail Manager Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Jail Manager'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Meeting Manager',
    applicationID: 'meeting-manager',
    label: 'Meeting Manager',
    helpText: 'Managing meeting agenda items and minutes with ease.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/meeting_room.svg',
      name: 'Meeting Manager Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Meeting Manager'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Municipal Jury Manager',
    applicationID: 'municipal-jury-manager',
    label: 'Municipal Jury Manager',
    helpText: 'Integrated jury management solution from summons through disposition',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/gavel.svg',
      name: 'Municipal Jury Manager Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Municipal Jury Manager'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Munis Mobile',
    applicationID: 'munis-mobile',
    label: 'Munis Mobile',
    helpText:
      'This is a service-layer supporting multiple ERP  mobile applications, and does not represent a client-facing product itself.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/smartphone.svg',
      name: 'Munis Mobile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Munis Mobile'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'My Civic',
    applicationID: 'my-civic',
    label: 'My Civic',
    helpText: 'Resident engagement mobile app ',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/home_city.svg',
      name: 'My Civic Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'My Civic'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'New World ERP',
    applicationID: 'new-world-erp',
    label: 'New World ERP',
    helpText: 'Complete enterprise resource planning solutions.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/calculator.svg',
      name: 'New World ERP Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'New World ERP'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Notify Dashboard',
    applicationID: 'TNDashboard',
    label: 'Notify',
    helpText: 'Manage Notify',
    icon: {
      type: 'image',
      uri: 'https://demo.tcpci.com/tn/dashboard/images/application-icon.svg',
      name: '/tn/dashboard/images/application-icon.svg'
    },
    uri: 'https://demo.tcpci.com/tn/dashboard',
    action: 'Main',
    category: 'Launcher',
    priority: 1000,
    product: 'Notify'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Agency setup',
    applicationID: 'TNAgencyPortal',
    label: 'Notify Agency Setup',
    helpText: 'Administer Notify Agencies',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'business'
    },
    uri: 'https://demo.tcpci.com/tn/agencyportal',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 2,
    product: 'Notify'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Open Finance',
    applicationID: 'open-finance',
    label: 'Open Finance',
    helpText: 'A citizen-facing financial transparency solution integrated with all Tyler ERP systems.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/chart_histogram.svg',
      name: 'Open Finance Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Open Finance'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Parks & Recreation',
    applicationID: 'parks-recreation',
    label: 'Parks & Recreation',
    helpText: 'Facilities and programs solution for parks',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/pine_tree.svg',
      name: 'Parks & Recreation Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Parks & Recreation'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'PayCitation-Pay',
    applicationID: 'PayCitation-Pay',
    label: 'Pay Citation',
    helpText: 'Click to pay a citation online',
    icon: {
      type: 'font',
      name: 'application'
    },
    uri: 'https://demo.tcpci.com/pay-citation/pay',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'PayCitation'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'PayCitation-Search',
    applicationID: 'PayCitation-Search',
    label: 'Search for Citations',
    helpText: 'Click to search for citations online',
    icon: {
      type: 'font',
      name: 'application'
    },
    uri: 'https://demo.tcpci.com/pay-citation/search',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'PayCitation'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Payments Administration Home Page',
    applicationID: 'payments-navigation-admin',
    label: 'Payments Administration Home Page',
    helpText: 'Main menu to access Payments Reporting and the Payments Enterprise Portal setup and daily use',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'credit_card'
    },
    uri: 'https://demo.tcpci.com/payments/navigation-admin',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 1000,
    product: 'Payments'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Payments Administration Home Page',
    applicationID: 'payments-navigation-admin',
    label: 'Payments Administration Home Page',
    helpText: 'Main menu to access Payments Reporting and the Payments Enterprise Portal setup and daily use',
    icon: {
      type: 'image',
      uri: 'https://demo.tcpci.com/payments/billsearch/images/application-icon.svg',
      name: '/payments/billsearch/images/application-icon.svg'
    },
    uri: 'https://demo.tcpci.com/payments/navigation-admin',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Payments'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Pet Registration Approval',
    applicationID: 'PetReg-Approval',
    label: 'Pet Approval',
    helpText: 'Click to approve pet registrations online',
    icon: {
      type: 'Image',
      uri: 'https://demo.tcpci.com/pet-reg/approval/images/pets.png',
      name: 'Approval Icon'
    },
    uri: 'https://demo.tcpci.com/pet-reg/approval',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'PetReg'
  },
  {
    admin: false,
    showProductBage: false,
    applicationID: 'tcp-admincenter',
    label: 'Admin Center',
    helpText: 'Your central hub for administration of your organization.',
    icon: {
      type: 'icon',
      name: 'settings'
    },
    uri: 'https://demo-admin.tcpci.com/org/admin-center',
    priority: 9001,
    product: 'Portico'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'CommunityProfileManager',
    applicationID: 'tcp-community-admin',
    label: 'Community Access Profile Manager',
    helpText: 'Community Access Profile Manager application',
    icon: {
      type: 'image',
      uri: 'https://demo.tcpci.com/portal/community-profile-manager/images/application-icon.png',
      name: 'Community Access Profile Manager'
    },
    uri: 'https://demo.tcpci.com/portal/community-profile-manager',
    action: 'Main',
    category: 'Launcher',
    priority: 1,
    product: 'Portico'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Product Reg Test',
    applicationID: 'prod-reg-test',
    label: 'Product Reg Test',
    helpText: 'Product Reg Test',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/teach.svg',
      name: 'Product Reg Test Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Product Reg Test'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Property Access',
    applicationID: 'property-access',
    label: 'Property Access',
    helpText: 'Public data portal for Assessment and Tax data',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/.svg',
      name: 'Property Access Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Property Access'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Public Safety Analytics',
    applicationID: 'court-analytics',
    label: 'Public Safety Analytics',
    helpText: 'A suite of analytical tools for leadership & analysts of public safety agencies.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/.svg',
      name: 'Public Safety Analytics Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Public Safety Analytics'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Public Safety Pro',
    applicationID: 'public-safety-pro',
    label: 'Public Safety Pro',
    helpText:
      'Integrated computer-aided dispatch (CAD), records management, and mobile solutions for quick and effective response, management and investigation.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/shield_account.svg',
      name: 'Public Safety Pro Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Public Safety Pro'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'ps-propertyroom',
    applicationID: 'ps-propertyroom',
    label: 'Property Room',
    helpText: 'Click to view the property room',
    icon: {
      type: 'font',
      name: 'police_badge_outline'
    },
    uri: 'https://demo.tcpci.com/records/property-room',
    action: 'Main',
    category: 'Launcher',
    priority: 100,
    product: 'Records'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'School ERP Pro',
    applicationID: 'school-erp-pro',
    label: 'School ERP Pro',
    helpText: 'Integrated enterprise resource planning solutions for K-12 organizations',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/school.svg',
      name: 'School ERP Pro Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'School ERP Pro'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Service Request Access Administration',
    applicationID: 'my311-administration',
    label: 'Service Request Access Administration',
    helpText: 'Administer the Enterprise Service Request Access product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'report_problem'
    },
    uri: 'https://demo.tcpci.com/my311/admin',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Service Request Access'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Signature Service Administration',
    applicationID: 'tss-admin-app',
    label: 'Signature Service Administration',
    helpText: 'Administer the Signature Service Administration product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'admin_panel_settings'
    },
    uri: 'https://demo.ci.signatureservice.erp.tylerapp.com/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Signature Service'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'SmartFile',
    applicationID: 'smart-file',
    label: 'SmartFile',
    helpText: 'Online filings related to Assessment and Tax data',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/.svg',
      name: 'SmartFile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'SmartFile'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'State Regulatory Digital Solutions',
    applicationID: 'resident-resources',
    label: 'State Regulatory Digital Solutions',
    helpText: 'Occupational & Professional licensing lifecycle management system',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/file_certificate.svg',
      name: 'State Regulatory Digital Solutions Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'State Regulatory Digital Solutions'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'State Regulatory Platform Suite',
    applicationID: 'state-reg-platform',
    label: 'State Regulatory Platform Suite',
    helpText: 'Suite of applications relating to state licensing and enforcement',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/.svg',
      name: 'State Regulatory Platform Suite Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'State Regulatory Platform Suite'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Student Transportation',
    applicationID: 'search-service',
    label: 'Student Transportation',
    helpText: 'Student transportation operations management',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/bus.svg',
      name: 'Student Transportation Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Student Transportation'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Time & Attendance',
    applicationID: 'time-attendance',
    label: 'Time & Attendance',
    helpText:
      'Complete solution for timekeeping, scheduling, and export to payroll. Integrating product with ERP Payroll.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/calendar_clock.svg',
      name: 'Time & Attendance Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Time & Attendance'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Tyler Application Platform',
    applicationID: 'eap',
    label: 'Tyler Application Platform',
    helpText: 'Low-code application development platform',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/code.svg',
      name: 'Tyler Application Platform Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Tyler Application Platform'
  },
  {
    admin: true,
    showProductBage: false,
    applicationName: 'Workflow Administration',
    applicationID: 'workflow-admin',
    label: 'Workflow Administration',
    helpText: 'Administer the Workflow product',
    icon: {
      type: 'font',
      uri: '',
      color: '',
      name: 'admin_panel_settings'
    },
    uri: 'https://demo.ci.workflow.tylerapp.com/administration',
    action: 'Administration',
    category: 'CloudPlatform',
    priority: 100,
    product: 'Workflow'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Workforce Case Management',
    applicationID: 'workflow-cm',
    label: 'Workforce Case Management',
    helpText:
      'Tyler Workforce Case Management products allow federal and state agencies track complaints related to their workforce.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/extended/briefcase.svg',
      name: 'Workforce Case Management Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Workforce Case Management'
  },
  {
    admin: false,
    showProductBage: false,
    applicationName: 'Workforce Mobile',
    applicationID: 'workforce-mobile',
    label: 'Workforce Mobile',
    helpText:
      'We empower other Tyler solutions with streamlined, quality mobile development while also providing a cohesive mobile experience for users.',
    icon: {
      type: 'image',
      uri: 'https://cdn.forge.tylertech.com/v1/icons/svg/standard/smartphone.svg',
      name: 'Workforce Mobile Icon'
    },
    uri: 'https://demo.ci.hub.tylerapp.com/main/05ccce58-c322-435a-ba88-988746ca5986',
    action: 'Main',
    category: 'Launcher',
    priority: 0,
    product: 'Workforce Mobile'
  }
];

const allApps = data.map(d => {
  return {
    label: d.label,
    iconName: selectRandomIconForDemo(),
    uri: d.uri
  };
}) as AppLauncherOption[];

// console.log(allApps);
// console.log(icons);

const relatedApps: AppLauncherOption[] = [
  {
    label: 'Payments Administration',
    iconName: 'payment',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'PEP Administration',
    iconName: 'admin_panel_settings',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'Permissions',
    iconName: 'security',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'Batch Integration',
    iconName: 'batch_prediction',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'System Integration',
    iconName: 'settings_system_daydream',
    uri: 'www.google.com',
    target: '_blank'
  }
];

const meta = {
  title: 'Components/App Launcher',
  render: args => {
    return html`
      <forge-card no-padding>
        <forge-toolbar no-border>
          <forge-app-launcher no-border=${args.noBorder} .allApps=${allApps} slot="end">
            <span slot="related-apps-title">${args.relatedAppsTitle}</span>
            <span slot="all-apps-title">${args.allAppsTitle}</span>
            <span slot="view-all-apps-button-text">${args.viewAllAppsButtonText}</span>
            <span slot="custom-links-title">${args.customLinksTitle}</span>
          </forge-app-launcher>
        </forge-toolbar>
      </forge-card>
    `;
  },

  component,
  argTypes: {
    showRelatedApps: { control: 'boolean' },
    showCustomLinks: { control: 'boolean' },
    relatedAppsTitle: { control: 'text' },
    allAppsTitle: { control: 'text' },
    viewAllAppsButtonText: { control: 'text' }
  },
  args: {
    showRelatedApps: true,
    showCustomLinks: true,
    relatedAppsTitle: 'Related apps',
    allAppsTitle: 'All apps',
    viewAllAppsButtonText: 'View all apps',
    customLinksTitle: 'Custom links'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
