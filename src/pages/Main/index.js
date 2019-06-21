import React, { Component } from 'react';

import markX from '~/assets/images/markX.png';
import markO from '~/assets/images/markO.png';

import {
  Container,
  Header,
  InfoPlayers,
  InfoPlayersColumn,
  Name,
  Symbol,
  Buttons,
  Slot,
  Footer,
  Options,
  ButtonAction,
  ButtonActionText,
} from './styles';

class Main extends Component {
  state = {
    winner: false,
  };

  render() {
    return (
      <Container>
        <Header>
          <InfoPlayers>
            <InfoPlayersColumn>
              <Name>Player 1</Name>
              <Symbol source={markX} />
            </InfoPlayersColumn>
            <InfoPlayersColumn>
              <Name>Player 2</Name>
              <Symbol source={markO} />
            </InfoPlayersColumn>
          </InfoPlayers>
        </Header>
        <Buttons>
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
        </Buttons>
        <Footer>
          <Options>
            <ButtonAction>
              <ButtonActionText>Iniciar novo jogo</ButtonActionText>
            </ButtonAction>
          </Options>
        </Footer>
      </Container>
    );
  }
}

export default Main;
