import styled from 'styled-components/native'
import theme from '../../constants/theme';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.background2};
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: ${theme.fonts.medium}px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

export const Content = styled.View``;



