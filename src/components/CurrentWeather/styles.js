import styled from 'styled-components/native'
import theme from '../../constants/theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 0px;
`;

export const Title = styled.Text`
  font-size: ${theme.fonts.subtitle}px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: ${theme.fonts.mediumTiny}px;
  color: ${({ theme }) => theme.text};
  margin: 5px 0px 10px;
`;

export const Time = styled.Text`
  font-size: ${theme.fonts.medium}px;
  color: ${({ theme }) => theme.text};
`;

export const Temperature = styled.Text`
  font-size: ${theme.fonts.big}px;
  color: ${({ theme }) => theme.text};
`;

export const DayType = styled.Text`
  font-size: ${theme.fonts.medium}px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  margin: 10px;
`;

export const Description = styled.Text`
  font-size: ${theme.fonts.mediumTiny}px;
  color: ${({ theme }) => theme.text};
`;

