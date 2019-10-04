import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import { Container } from './styles';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <Header title="Settings" />
    </Container>
  );
}

SettingsScreen.navigationOptions = {
  header: null
};
