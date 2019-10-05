import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
 
const WIDTH = Dimensions.get('window').width
export default class InputPlayers extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <View style={{left: '7%', marginTop: '10%'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 70, height: 70, backgroundColor:`${this.props.color}`, borderRadius: 70, marginRight: 10}}/>
        
                    <View style={{width: 250}}>
                        <TextInput
                            label={`Nome Jogador ${this.props.nrJogador}`}
                            value={this.state.text}
                            underlineColor={`${this.props.color}`}
                            onChangeText={text => this.setState({ text })}
                            mode="outlined" />
                    </View>
                </View>
            </View>
        )
    }
}
