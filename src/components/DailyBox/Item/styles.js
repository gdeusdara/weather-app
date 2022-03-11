import styled from 'styled-components/native'
import theme from '../../../constants/theme';
export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  flex-direction: row;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex: 0.25;
`;

export const Text = styled.Text`
  font-size: ${theme.fonts.mediumTiny}px;
  color: ${({ theme }) => theme.text};
`;

export const TextAux = styled.Text`
  font-size: ${theme.fonts.tiny}px;
  color: ${({ theme }) => theme.text};
  margin-right: 5px;
`;