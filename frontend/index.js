import { AppRegistry, Text, TextInput } from 'react-native';
import App from './src/native/index';
import { name as appName } from './app.json';

// Disable text scaling
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

// Disable text input scaling
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
