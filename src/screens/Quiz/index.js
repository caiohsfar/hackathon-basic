import React, { Component } from 'react';
import {  View, Text, Dimensions } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Header from '../../components/Header';
import AskCard from '../../components/AskCard';
import styles from './styles'

export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex: 1}}>
            <View style={{justifyContent: 'center', alignContent: 'center', backgroundColor: 'black', height: 20, width: Dimensions.get('window').width}}>
                
            </View>

            <View style={{justifyContent: 'center', alignContent: '', backgroundColor: 'black'}}></View>
        </View>
    );
  }
}
