import styled from 'styled-components/native'
import theme from '../../../constants/theme';
export const Container = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

export const Hour = styled.Text`
  font-size: ${theme.fonts.tiny}px;
  color: ${({ theme }) => theme.text};
`;

export const Temperature = styled.Text`
  font-size: ${theme.fonts.mediumTiny}px;
  color: ${({ theme }) => theme.text};
`;