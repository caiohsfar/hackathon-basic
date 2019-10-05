import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NavigationService from './src/navigation/service';

import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar
} from 'react-native-paper';

import AppNavigator from './src/navigation/AppNavigator';

import Game from './src/services/Game';

const game = new Game('hackercidadao');

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#41C9C7',
    accent: '#fff'
  }
};

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={() => this.handleFinishLoading()}
        />
      );
    } else {
      return (
        <PaperProvider theme={theme}>
          <Appbar style={{ height: StatusBar.currentHeight }} />
          <AppNavigator ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }
          } />
        </PaperProvider>
      );
    }
  }

  async loadResourcesAsync() {
    await Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to
        // remove this if you are not using it in your app
        'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);
  }

  handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  }

  handleFinishLoading() {
    this.setState({ isLoadingComplete: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
