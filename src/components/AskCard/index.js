import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default function AskCard({ conteudo, onPress }) {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{conteudo}</Text>
    </View>
  );
}
