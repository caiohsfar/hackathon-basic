import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import Button from '../../components/Button';
import Dice from '../../components/Dice';

export default function DiceScreen(props) {
  const [isRolling, setIsRolling] = useState(false);
  const [currentPoint, setCurrentPoint] = useState('1');

  function handleDicePress() {
    setIsRolling(true);
    setTimeout(() => {
      const newPoint = Math.floor(Math.random() * (6 - 1) + 1);
      setIsRolling(false);
      setCurrentPoint(newPoint);
    }, 2000);
  }
  return (
    <View style={styles.container}>
      <Header title="Caio" subtitle="Sua vez de jogar o dado" />
      <View
        style={{
          flex: 0.8,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Dice
          onPress={handleDicePress}
          isRolling={isRolling}
          currentPoint={currentPoint}
        />
      </View>

      <Button
        title="Continuar"
        onPress={() => props.navigation.navigate('Board')}
      />
    </View>
  );
}
