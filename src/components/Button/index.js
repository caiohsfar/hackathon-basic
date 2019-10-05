import React from 'react';
import { Button } from 'react-native-paper';
import styles from './styles';
// import { Container } from './styles';

export default function CustomButton({ title, onPress, disabled }) {
  return (
    <Button style={styles.container} mode="contained" onPress={onPress} disabled={disabled} >
      {title}
    </Button>
  );
}
