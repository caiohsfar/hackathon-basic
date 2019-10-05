import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import Button from '../../components/Button';
import Dice from '../../components/Dice';

import Game from '../../services/Game';
const game = new Game();

export default function DiceScreen(props) {
  const [isRolling, setIsRolling] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [currentPoint, setCurrentPoint] = useState('1');
  const [players, setPlayers] = useState([]);
  const [playersRes, setPlayersRes] = useState([]);
  const [currPlayerIdx, setCurrPlayerIdx] = useState(0);
  const [currPlayer, setCurrPlayer] = useState(null);
  
  useEffect(() => {
    const players = game.players;
    console.log(players);
    setPlayers(players);
    setCurrPlayer(players[currPlayerIdx]);
  }, []);

  useEffect(() => {
    setPlayersRes([...playersRes, {player: players[currPlayerIdx], result: currentPoint}]);
    let nextPlayerIdx = currPlayerIdx + 1;
    console.log(nextPlayerIdx < players.length);
    if (nextPlayerIdx < players.length) {
      setCurrPlayerIdx(currPlayerIdx + 1);
      setCurrPlayer(players[currPlayerIdx + 1]);
    } else if (players.length > 0) {
      console.log('disabled');
      game.sort(playersRes);
      setIsDisable(true);
    }
  }, [currentPoint]);

  function handleDicePress() {
    console.log(isDisable)
    if (!isDisable)  {
      setIsRolling(true);
      setTimeout(() => {
        const newPoint = Math.floor(Math.random() * (6 - 1) + 1);
        setIsRolling(false);
        setCurrentPoint(newPoint);
      }, 1000);
    }    
  }
  return (
    players.length > 0 && (<View style={styles.container}>
      {currPlayer && (<Header title={currPlayer.name} subtitle="Sua vez de jogar o dado" />)}
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
        disabled={!isDisable}
      />
    </View>)
  );
}
