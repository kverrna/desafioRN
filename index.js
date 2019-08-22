/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/routers/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
