import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps84280Navigator from '../features/Maps84280/navigator';
import Add-Item84279Navigator from '../features/Add-Item84279/navigator';
import Maps84275Navigator from '../features/Maps84275/navigator';
import UserProfile84271Navigator from '../features/UserProfile84271/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps84280: { screen: Maps84280Navigator },
Add-Item84279: { screen: Add-Item84279Navigator },
Maps84275: { screen: Maps84275Navigator },
UserProfile84271: { screen: UserProfile84271Navigator },

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
