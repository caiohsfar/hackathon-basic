import React from 'react';
import { Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
const dices = [
  require('../../assets/images/dice1.png'),
  require('../../assets/images/dice2.png'),
  require('../../assets/images/dice3.png'),
  require('../../assets/images/dice4.png'),
  require('../../assets/images/dice5.png'),
  require('../../assets/images/dice6.png')
];
// import { Container } from './styles';
export default function Dice({ isRolling, src, onPress, currentPoint }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!isRolling ? (
        <Image style={styles.image} source={dices[currentPoint - 1]} />
      ) : (
        <ActivityIndicator size="large" animating={isRolling} />
      )}
    </TouchableOpacity>
  );
}
