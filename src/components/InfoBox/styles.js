import styled from 'styled-components/native'
import theme from '../../constants/theme';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.background2};
  border-radius: 10px;
  margin: 10px;
`;

export const Title = styled.Text`
  font-size: ${theme.fonts.mediumTiny}px;
  color: ${({ theme }) => theme.text};
  padding: 10px;
`;

export const Content = styled.View``;



