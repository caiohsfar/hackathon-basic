import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';

export default function HomeScreen() {
  return (
    <Container>
      <Header title="Home" />
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
