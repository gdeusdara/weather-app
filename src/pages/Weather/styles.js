import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.background1, theme.background2]
}))`
  flex: 1;
`;
