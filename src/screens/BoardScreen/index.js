import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import CustomButton from '../../components/Button';
import Header from '../../components/Header';
import PlayerScore from '../../components/PlayerScore';

import styles from './styles';

export default function BoardScreen(props) {
  function renderBoards() {}

  function renderQuestions() {}

  return <View style={styles.container}>
      <ProgressBar progress={0.5} color={"#094644"} />
       <View style={styles.header}>
          <Header title="Tabuleiro" subtitle="Olha quem tá ganhando!"/>  
        </View>
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}></View>
        
            <View style={{justifyContent: 'space-around', flexDirection: 'row', marginBottom: "10%"}}>
              <PlayerScore name={'Caio'} color={"#F5015D"} altura={2}/>
              <PlayerScore name={"Hérculles"} color={"#FCDF05"} altura={1}/>
              <PlayerScore name={"Ítalo"} color={"#44D49C"} altura={5}/>
              <PlayerScore name={"Eduardo"} color={"#2885B6"} altura={4}/>
            </View>

          <CustomButton style={{backgroundColor: '#41C9C7', width: Dimensions.get('window').width, height: 40, justifyContent: 'center', alignItems: 'center'}}
          title="Começar"
          onPress={() => props.navigation.navigate('Dice')}
        />
        </View>
}
