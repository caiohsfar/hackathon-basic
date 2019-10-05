import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function DiceScreen(props) {
  return    <View style={{flexDirection: 'column', alignItems: 'center',justifyContent: 'flex-end'}}>
                <View style={{height: 250, width: 40, backgroundColor: `${props.color}`}}></View>
                <Text style={{fontSize: 20}}>{props.name}</Text>
            </View>
    }