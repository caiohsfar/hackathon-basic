import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';

export default function LinksScreen() {
  return (
    <Container>
      <Header title="Links" />
    </Container>
  );
}

LinksScreen.navigationOptions = {
  header: null
};
