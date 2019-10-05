import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function DiceScreen(props) {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <View
        style={{
          borderRadius: 4,
          height: props.altura,
          width: 40,
          backgroundColor: `${props.color}`,
          marginBottom: 10
        }}
      ></View>
      <Text style={{ fontSize: 20 }}>{props.name}</Text>
    </View>
  );
}
