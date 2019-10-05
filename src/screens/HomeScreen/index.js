import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import InputPlayers from '../../components/InputPlayers';
import styles from './styles';
import CustomButton from '../../components/Button';

import Game from '../../services/Game';
import Player from '../../services/Player';

export default class HomeScreen extends Component {
  state = {
    player0: 'Jogador 1',
    player1: 'Jogador 2',
    player2: 'Jogador 3',
    player3: 'Jogador 4',
  }

  handleOnPress = () => {
    const game = new Game();
    game.addPlayer(new Player(this.state.player0, '#F5015D'));
    game.addPlayer(new Player(this.state.player1, '#FCDF05'));
    game.addPlayer(new Player(this.state.player2, '#44D49C'));
    game.addPlayer(new Player(this.state.player3, '#2885B6'));
    console.log(game);
    this.props.navigation.navigate('Dice');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Header title="Jogadores" subtitle="Coloquem seus nomes" />
        </View>
        <View style={[styles.jogadores, { top: 40 }]}>
          <InputPlayers onChange={(text) => this.setState({player0: text})} nrJogador={1} color={'#F5015D'} />
          <InputPlayers onChange={(text) => this.setState({player1: text})} nrJogador={2} color={'#FCDF05'} />
          <InputPlayers onChange={(text) => this.setState({player2: text})} nrJogador={3} color={'#44D49C'} />
          <InputPlayers onChange={(text) => this.setState({player3: text})} nrJogador={4} color={'#2885B6'} />
        </View>
        <CustomButton
          title="Continuar"
          onPress={() => this.handleOnPress()}
        />
      </View>
    );
  }
}
