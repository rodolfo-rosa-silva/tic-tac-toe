import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1b1b1b;
`;

export const Header = styled.View``;

export const InfoPlayers = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const InfoPlayersColumn = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 20px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Symbol = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Wins = styled.Text`
  color: #fff;
  margin-top: 10px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ButtonSelect = styled.TouchableOpacity`
  background: #2a2a2a;
  border-radius: 4px;
  width: 28%;
  height: 100px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonSelectIcon = styled.Image``;

export const Footer = styled.View``;

export const Options = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonAction = styled.TouchableOpacity`
  padding: 15px 25px;
  background: #228dff;
  border-radius: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonActionText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ModalContainer = styled.View`
  background: #fff;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.Text`
  color: #000;
  font-size: ${props => (props.largeText ? '16px' : '20px')};
  margin-bottom: 20px;
  text-align: center;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => (props.column ? 'space-between' : 'center')};
  align-items: center;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 150px;
  padding: ${props => (props.column ? '10px 20px' : '15px 25px')};
  background: #228dff;
  border-radius: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
