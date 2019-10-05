import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import InputPlayers from '../../components/InputPlayers';
import styles from './styles';
import CustomButton from '../../components/Button';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Header title="Jogadores" subtitle="Coloquem seus nomes" />
        </View>
        <View style={[styles.jogadores, { top: 40 }]}>
          <InputPlayers nrJogador={1} color={'#F5015D'} />
          <InputPlayers nrJogador={2} color={'#FCDF05'} />
          <InputPlayers nrJogador={3} color={'#44D49C'} />
          <InputPlayers nrJogador={4} color={'#2885B6'} />
        </View>
        <CustomButton
          title="Continuar"
          onPress={() => this.props.navigation.navigate('Dice')}
        />
      </View>
    );
  }
}
