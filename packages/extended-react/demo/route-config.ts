import { RouteProps } from 'react-router';
import { Home } from './core/home/Home';
import { BusyIndicatorDemo } from './demos/busy-indicator/BusyIndicatorDemo';
import { QuantityFieldDemo } from './demos/quantity-field/QuantityFieldDemo';
import { ResponsiveToolbarDemo } from './demos/responsive-toolbar/ResponsiveToolbarDemo';
import { UserProfileDemo } from './demos/user-profile/UserProfileDemo';

export interface IAppRoute extends RouteProps {
  path: string;
  routes?: IAppRoute[];
  text?: string;
  icon?: string;
}

const routes: IAppRoute[] = [
  { path: '/', component: Home, exact: true, text: 'Home', icon: 'home' },
  {
    path: '/components',
    text: 'Components',
    icon: 'settings_input_component',
    routes: [
      { path: '/busy-indicator', component: BusyIndicatorDemo, text: 'Busy Indicator' },
      { path: '/quantity-field', component: QuantityFieldDemo, text: 'Quantity Field' },
      { path: '/responsive-toolbar', component: ResponsiveToolbarDemo, text: 'Responsive Toolbar' },
      { path: '/user-profile', component: UserProfileDemo, text: 'User Profile' }
    ]
  }
];

export default routes;
