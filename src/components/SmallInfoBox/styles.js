import styled from 'styled-components/native'
import theme from '../../constants/theme';

export const View = styled.View`
  flex: 0.5;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: ${({ big }) => big ? theme.fonts.big : theme.fonts.medium}px;
  margin-top: ${({ big }) => big ? 0 : 5}px;
  color: ${({ theme }) => theme.text};
`;


