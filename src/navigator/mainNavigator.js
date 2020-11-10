import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile170483Navigator from '../features/UserProfile170483/navigator';
import Settings170482Navigator from '../features/Settings170482/navigator';
import Settings170480Navigator from '../features/Settings170480/navigator';
import SignIn2170478Navigator from '../features/SignIn2170478/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile170483: { screen: UserProfile170483Navigator },
Settings170482: { screen: Settings170482Navigator },
Settings170480: { screen: Settings170480Navigator },
SignIn2170478: { screen: SignIn2170478Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
