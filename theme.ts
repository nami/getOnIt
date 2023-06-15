import {MD3LightTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export const theme = {
  ...MD3LightTheme,
  myOwnProperty: true,
  colors: {
    primary: '#FF009C',
    secondary: '#A6009C',
    tertiary: '#1C1C1C',
    background: '#F4F6F8',
  },
};

// Just for iPhone as android in built fonts are limited
export const fonts = StyleSheet.create({
  bold: {fontFamily: 'PingFangSC-Semibold', fontWeight: '600'},
  regular: {fontFamily: 'PingFangSC-Regular', fontWeight: '300'},
  medium: {fontFamily: 'PingFangSC-Medium', fontWeight: '400'},
  light: {fontFamily: 'PingFangSC-Light', fontWeight: '100'},
  thin: {fontFamily: 'PingFangSC-Thin', fontWeight: '100'},
});
