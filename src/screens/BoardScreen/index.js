import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Animated } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import CustomButton from '../../components/Button';
import Header from '../../components/Header';
import PlayerScore from '../../components/PlayerScore';
import NavService from '../../navigation/service';

import styles from './styles';

import Game from '../../services/Game';
const game = new Game();
const players = game.players;

export default function BoardScreen(props) {
  const AnimatedProgress = Animated.createAnimatedComponent(ProgressBar);
  const progress = new Animated.Value(1);
  const [points, setPoints] = useState([5, 5, 5, 5]);
  // const [players, setPlayers] = useState([]);

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
      {/* {players.map((player) => { */}
      <PlayerScore name={players[0].name} color={players[0].color} altura={players[0].score > 5 ? players[0].score * 5: 5} />
      <PlayerScore name={players[1].name} color={players[1].color} altura={players[1].score > 5 ? players[1].score * 5: 5} />
      <PlayerScore name={players[2].name} color={players[2].color} altura={players[2].score > 5 ? players[2].score * 5: 5} />
      <PlayerScore name={players[3].name} color={players[3].color} altura={players[3].score > 5 ? players[3].score * 5: 5} />
        
      {/* })}         */}
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
