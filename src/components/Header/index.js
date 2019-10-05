import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.titulo}>{this.props.title}</Text>
        </View>
        <View>
          <Text style={styles.subtitulo}>{this.props.subtitle}</Text>
        </View>
      </View>
    );
  }
}
