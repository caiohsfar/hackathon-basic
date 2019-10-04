import React from 'react';
import { Appbar } from 'react-native-paper';

export default props => (
  <Appbar.Header>
    {props.goBack && <Appbar.BackAction onPress={props.goBack} />}
    <Appbar.Content title={props.title} />
  </Appbar.Header>
);
