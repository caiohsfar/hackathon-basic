import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Animated } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import CustomButton from '../../components/Button';
import Header from '../../components/Header';
import PlayerScore from '../../components/PlayerScore';
import NavService from '../../navigation/service';

import styles from './styles';

export default function BoardScreen(props) {
  const AnimatedProgress = Animated.createAnimatedComponent(ProgressBar);
  const progress = new Animated.Value(1);
  const [points, setPoints] = useState([5, 5, 5, 5]);

  function renderBoards() {}

  function renderQuestions() {}

  function decrementProgress() {
    Animated.timing(progress, {
      toValue: 0,
      duration: 8000,
      useNativeDriver: true
    }).start(() => {
      // props.navigation.navigate('Quiz');
      NavService.replace('Quiz');
    });
  }

  useEffect(decrementProgress, [progress]);

  return (
    <View style={styles.container}>
      <AnimatedProgress
        style={{ top: -16 }}
        progress={progress}
        color={'#094644'}
      />
      <View style={styles.header}>
        <Header title="Tabuleiro" subtitle="Olha quem tá ganhando!" />
      </View>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      ></View>

      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginBottom: '10%'
        }}
      >
        <PlayerScore name={'Caio'} color={'#F5015D'} altura={points[0]} />
        <PlayerScore name={'Hérculles'} color={'#FCDF05'} altura={points[1]} />
        <PlayerScore name={'Ítalo'} color={'#44D49C'} altura={points[2]} />
        <PlayerScore name={'Eduardo'} color={'#2885B6'} altura={points[3]} />
      </View>

      {/* <CustomButton
        style={{
          backgroundColor: '#41C9C7',
          width: Dimensions.get('window').width,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        title="Começar"
        onPress={() => NavService.replace('Quiz')}
      /> */}
    </View>
  );
}
