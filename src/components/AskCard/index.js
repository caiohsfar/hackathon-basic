import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default function AskCard({ conteudo, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{conteudo}</Text>
    </TouchableOpacity>
  );
}
