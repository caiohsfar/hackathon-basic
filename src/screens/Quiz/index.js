import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import CustomButton from '../../components/Button';
import {  View, Text, Dimensions, TouchableOpacity } from 'react-native';

import { ProgressBar, Dialog, Portal, Button, Provider, Paragraph  } from 'react-native-paper';
import Header from '../../components/Header';
import AskCard from '../../components/AskCard';
import styles from './styles';

export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible2: false,
      msg: 0
    }
  };
  
  _showDialog = () => this.setState({ visible: true });
  
  _hideDialog = () => this.setState({ visible: false });

  _reply = (number) => {
    if(number == '1'){
      this.setState({msg: 2})
    }else{
      this.setState({msg: 1})
    }
    this.setState({visible2: true, visible: false})
  }

  render() {
    return (
        <View style={{flex: 1}}>
            <ProgressBar progress={0.5} color={"#094644"} />
            <View style={styles.header}>
                <Header title="Turno de Caio" subtitle="Rodada 1"/>  
            </View>
            <View style={{justifyContent: 'center', alignContent: 'center'}}>
              <AskCard conteudo={"O vírus que eu atinjo tem um alto potencial de mutação"} /> 
              <AskCard conteudo={"Sou uma vacina que cura uma doença que é muito confundida com outra doença que começa com a letra R"} /> 
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}></View>
            <View style={{flexDirection: 'column'}}>
              <CustomButton
                title="Responder"
                onPress={this._showDialog}
              />
              
            </View>
            <Portal>
              <Dialog
                visible={this.state.visible}
                onDismiss={this._hideDialog}>
                <Dialog.Title>Clique na resposta...</Dialog.Title>
                <Dialog.Content>
                <Button mode="text" onPress={() => this._reply('0')}><Text>Influenza Sazonal</Text></Button>
                <Button mode="text" onPress={() => this._reply('1')}><Text>Hepatite A</Text></Button>
                <Button mode="text" onPress={() => this._reply('2')}><Text>Febre Amarela</Text></Button>
                <Button mode="text" onPress={() => this._reply('3')}><Text>Hepatite B</Text></Button>
                </Dialog.Content>
              </Dialog>
              <Dialog
                visible={this.state.visible2}
                onDismiss={this._hideDialog2}>
                <Dialog.Content>
                  <Text style={{textAlign: 'center', fontSize: 20}}>{this.state.msg == 1 ? "Que pena! Não foi dessa vez." : "Muito bem! Você acertou!"}</Text >
                  <Paragraph></Paragraph>
                  <Text style={{textAlign: 'center', fontSize: 17}}>{this.state.msg == 1 ? ":(" : ":)"}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => this.setState({visible2: false})}>Ok</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
        </View>
    );
  }
}
