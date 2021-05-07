/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Adddata from './AddDataBio';
import App, { Home } from './Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
