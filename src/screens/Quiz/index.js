import React, { Component } from 'react';
import CustomButton from '../../components/Button';
import {  View, Text, Animated, TouchableOpacity } from 'react-native';
import { ProgressBar, Dialog, Portal, Button, Provider, Paragraph  } from 'react-native-paper';
import Header from '../../components/Header';
import AskCard from '../../components/AskCard';
import styles from './styles';
import NavService from '../../navigation/service';


const AnimatedProgress = Animated.createAnimatedComponent(ProgressBar);

export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible2: false,
      msg: 0
    }
  };

  progress = new Animated.Value(1);

  decrementProgress = () => {
    Animated.timing(this.progress, {
      toValue: 0,
      duration: 15000,
      useNativeDriver: true
    }).start(() => {
      // this.props.navigation.navigate('Board');
      NavService.replace('Board');
    });
  }
  
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

  componentDidMount() {
    this.decrementProgress();
  }

  render() {
    return (
        <View style={{flex: 1}}>
            <AnimatedProgress style={{ top: -16 }} progress={this.progress} color={"#094644"} />
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
