/* eslint-disable max-len */
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Modal from 'react-native-modal';

import markX from '~/assets/images/markX.png';
import markO from '~/assets/images/markO.png';

import {
  Container,
  Header,
  InfoPlayers,
  InfoPlayersColumn,
  Name,
  Symbol,
  Wins,
  Buttons,
  ButtonSelect,
  ButtonSelectIcon,
  Footer,
  Options,
  ButtonAction,
  ButtonActionText,
  ModalContainer,
  ModalText,
  ContainerButtons,
  ModalButton,
  ModalButtonText,
} from './styles';

class Main extends Component {
  state = {
    symbolIcon: {
      x: markX,
      o: markO,
    },
    currentSymbol: 'x',
    slots: {
      row1: ['', '', ''],
      row2: ['', '', ''],
      row3: ['', '', ''],
    },
    isWinner: false,
    winnerMessage: '',
    gameStarted: false,
    modalQuestionVisible: false,
    score: {
      player1: 0,
      player2: 0,
    },
  };

  async componentDidMount() {
    const stringScore = await AsyncStorage.getItem('@ticTacToe:score');
    if (stringScore) {
      const score = JSON.parse(stringScore);
      this.setState({ score });
    } else {
      const defineScore = { player1: 0, player2: 0 };
      await AsyncStorage.setItem('@ticTacToe:score', JSON.stringify(defineScore));
    }
  }

  handleSelect = (row, index) => {
    const { slots, currentSymbol } = this.state;
    slots[row][index] = currentSymbol;
    const changeSymbol = currentSymbol === 'x' ? 'o' : 'x';
    this.setState({ slots, currentSymbol: changeSymbol, gameStarted: true });
    this.checkWinner();
  };

  checkWinner = () => {
    if (this.checkHorizontal()) {
      this.defineWinner();
      return true;
    }
    if (this.checkVertical()) {
      this.defineWinner();
      return true;
    }
    if (this.checkDiagonal()) {
      this.defineWinner();
      return true;
    }
    if (this.checkTie()) {
      this.defineTie();
      return true;
    }
    return false;
  };

  checkHorizontal = () => {
    const { slots, currentSymbol } = this.state;
    const { row1, row2, row3 } = slots;

    if (row1[0] === currentSymbol && row1[1] === currentSymbol && row1[2] === currentSymbol) return true;
    if (row2[0] === currentSymbol && row2[1] === currentSymbol && row2[2] === currentSymbol) return true;
    if (row3[0] === currentSymbol && row3[1] === currentSymbol && row3[2] === currentSymbol) return true;

    return false;
  };

  checkVertical = () => {
    const { slots, currentSymbol } = this.state;
    const { row1, row2, row3 } = slots;

    if (row1[0] === currentSymbol && row2[0] === currentSymbol && row3[0] === currentSymbol) return true;
    if (row1[1] === currentSymbol && row2[1] === currentSymbol && row3[1] === currentSymbol) return true;
    if (row1[2] === currentSymbol && row2[2] === currentSymbol && row3[2] === currentSymbol) return true;

    return false;
  };

  checkDiagonal = () => {
    const { slots, currentSymbol } = this.state;
    const { row1, row2, row3 } = slots;

    if (row1[0] === currentSymbol && row2[1] === currentSymbol && row3[2] === currentSymbol) return true;
    if (row1[2] === currentSymbol && row2[1] === currentSymbol && row3[0] === currentSymbol) return true;

    return false;
  };

  checkTie = () => {
    const { slots } = this.state;
    const { row1, row2, row3 } = slots;

    let complete = true;

    row1.forEach((value) => {
      if (value === '') complete = false;
    });

    row2.forEach((value) => {
      if (value === '') complete = false;
    });

    row3.forEach((value) => {
      if (value === '') complete = false;
    });

    return complete;
  };

  defineWinner = async () => {
    const { currentSymbol, score } = this.state;
    let player = '';
    let defineScore = {};

    if (currentSymbol === 'x') {
      player = 'Player 1';
      defineScore = { player1: score.player1 + 1, player2: score.player2 };
    } else {
      player = 'Player 2';
      defineScore = { player1: score.player1, player2: score.player2 + 1 };
    }
    await AsyncStorage.setItem('@ticTacToe:score', JSON.stringify(defineScore));
    const winnerMessage = `${player} é o vencedor!`;
    this.setState({ winnerMessage, score: defineScore });
    this.toggleModalFinish();
  };

  defineTie = () => {
    const winnerMessage = 'Deu Velha!';
    this.setState({ winnerMessage, isWinner: true });
  };

  newGame = () => {
    const { modalQuestionVisible } = this.state;
    this.toggleModalFinish();
    if (modalQuestionVisible) this.toggleModalQuestion();
    this.setState({
      symbolIcon: {
        x: markX,
        o: markO,
      },
      currentSymbol: 'x',
      slots: {
        row1: ['', '', ''],
        row2: ['', '', ''],
        row3: ['', '', ''],
      },
      isWinner: false,
      winnerMessage: '',
      gameStarted: false,
    });
  };

  toggleModalFinish = () => {
    const { isWinner } = this.state;
    this.setState({ isWinner: !isWinner });
  };

  toggleModalQuestion = () => {
    const { modalQuestionVisible } = this.state;
    this.setState({ modalQuestionVisible: !modalQuestionVisible });
  };

  render() {
    const {
      slots,
      symbolIcon,
      isWinner,
      winnerMessage,
      gameStarted,
      modalQuestionVisible,
      score,
    } = this.state;
    const { row1, row2, row3 } = slots;

    return (
      <Container>
        <Header>
          <InfoPlayers>
            <InfoPlayersColumn>
              <Name>Player 1</Name>
              <Symbol source={markX} />
              <Wins>Vitórias: {score.player1}</Wins>
            </InfoPlayersColumn>
            <InfoPlayersColumn>
              <Name>Player 2</Name>
              <Symbol source={markO} />
              <Wins>Vitórias: {score.player2}</Wins>
            </InfoPlayersColumn>
          </InfoPlayers>
        </Header>
        <Buttons>
          {row1.map((item, index) => (
            <ButtonSelect
              key={Math.random()}
              onPress={() => {
                this.handleSelect('row1', index);
              }}
            >
              {slots.row1[index] !== '' && (
                <ButtonSelectIcon source={symbolIcon[slots.row1[index]]} />
              )}
            </ButtonSelect>
          ))}
          {row2.map((item, index) => (
            <ButtonSelect
              key={Math.random()}
              onPress={() => {
                this.handleSelect('row2', index);
              }}
            >
              {slots.row2[index] !== '' && (
                <ButtonSelectIcon source={symbolIcon[slots.row2[index]]} />
              )}
            </ButtonSelect>
          ))}
          {row3.map((item, index) => (
            <ButtonSelect
              key={Math.random()}
              onPress={() => {
                this.handleSelect('row3', index);
              }}
            >
              {slots.row3[index] !== '' && (
                <ButtonSelectIcon source={symbolIcon[slots.row3[index]]} />
              )}
            </ButtonSelect>
          ))}
        </Buttons>
        <Footer>
          {gameStarted && (
            <Options>
              <ButtonAction onPress={this.toggleModalQuestion}>
                <ButtonActionText>Resetar partida</ButtonActionText>
              </ButtonAction>
            </Options>
          )}
        </Footer>
        <Modal isVisible={modalQuestionVisible}>
          <ModalContainer>
            <ModalText largeText>Tem certeza que deseja reiniciar o jogo ?</ModalText>
            <ContainerButtons column>
              <ModalButton column onPress={this.newGame}>
                <ModalButtonText>OK</ModalButtonText>
              </ModalButton>
              <ModalButton column onPress={this.toggleModalQuestion}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
            </ContainerButtons>
          </ModalContainer>
        </Modal>
        <Modal isVisible={isWinner}>
          <ModalContainer>
            <ModalText>{winnerMessage}</ModalText>
            <ContainerButtons>
              <ModalButton onPress={this.newGame}>
                <ModalButtonText>Novo jogo</ModalButtonText>
              </ModalButton>
            </ContainerButtons>
          </ModalContainer>
        </Modal>
      </Container>
    );
  }
}

export default Main;
