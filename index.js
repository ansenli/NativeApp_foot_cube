/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {createAppContainer} from 'react-navigation'
import {AppNavigators} from './navigators/AppNavigators'
// import AppNavigator from './navigators/AppNavigators'

import {name as appName} from './app.json';
const AppStackNavigatorContainer = createAppContainer(AppNavigators)
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
