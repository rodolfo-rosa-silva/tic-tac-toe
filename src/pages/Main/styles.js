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
  padding: 20px;
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

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Slot = styled.View`
  background: #2a2a2a;
  border-radius: 4px;
  width: 28%;
  height: 100px;
  margin-bottom: 10px;
`;

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
