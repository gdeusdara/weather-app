import styled from 'styled-components/native'
import theme from '../../constants/theme';
import LottieView from 'lottie-react-native';

export const Lottie = styled(LottieView).attrs({
  loop: true,
  autoPlay: true
})`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

