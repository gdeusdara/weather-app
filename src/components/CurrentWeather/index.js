import moment from 'moment';
import { useTheme } from 'styled-components'

import {
  Container,
  Title,
  Subtitle,
  Time,
  Temperature,
  DayType,
  Description,
  Animation,
} from './styles'

const CurrentWeather = ({ weather, address }) => {
  const theme = useTheme()

  moment.locale('pt-br')
  const now = moment(new Date()).format('ll')

  return (
    <Container>
      <Title>{address.local_names.pt}</Title>
      <Subtitle>{address.state}, {address.country}</Subtitle>
      <Time>{now}</Time>
      <Animation />
      <Temperature>{weather.temp}  ºC</Temperature>
      <DayType>{weather.weather[0].description}</DayType>
      <Description>{theme.message}</Description>
    </Container>
  )
};

export default CurrentWeather;
