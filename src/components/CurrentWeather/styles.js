import styled from 'styled-components/native'
import theme from '../../constants/theme';
import LottieView from 'lottie-react-native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: ${theme.fonts.subtitle};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: ${theme.fonts.mediumTiny};
  color: ${({ theme }) => theme.text};
`;

export const Time = styled.Text`
  font-size: ${theme.fonts.medium};
  color: ${({ theme }) => theme.text};
`;

export const Temperature = styled.Text`
  font-size: ${theme.fonts.title};
  color: ${({ theme }) => theme.text};
`;

export const DayType = styled.Text`
  font-size: ${theme.fonts.medium};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: ${theme.fonts.mediumTiny};
  color: ${({ theme }) => theme.text};
`;

export const Animation = styled(LottieView).attrs(({ theme }) => ({
  source: theme.animation,
  loop: true,
  autoPlay: true
}))`
  width: 100px;
  height: 100px;
`;

