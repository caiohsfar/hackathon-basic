import React from 'react';
import { Button } from 'react-native-paper';
import styles from './styles';
// import { Container } from './styles';

export default function CustomButton({ title, onPress }) {
  return (
    <Button style={styles.container} mode="contained" onPress={onPress}>
      {title}
    </Button>
  );
}
