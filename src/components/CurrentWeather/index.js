import moment from 'moment';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components'
import formatNumber from '../../utils/formatNumber';
import Animation from '../Animation';
import Button from '../Button';

import {
  Container,
  Title,
  Subtitle,
  Time,
  Temperature,
  DayType,
  Description,
} from './styles'

const CurrentWeather = ({ onPress }) => {
  const theme = useTheme()
  const weather = useSelector(state => state.weather.data);
  const address = useSelector(state => state.address.data);

  const now = moment(new Date()).format('ll')

  if(address && address.length && weather) {
    return (
      <Container>
        <Title>{address[0].local_names.pt || address[0].name}</Title>
        <Subtitle>{address[0].state}, {address[0].country}</Subtitle>
        <Time>{now}</Time>
        <Animation weather={weather.current} size={200} />
        <Temperature>{formatNumber(weather.current.temp)}º</Temperature>
        <DayType>{weather.current.weather[0].description}</DayType>
        <Description>{theme.message}</Description>
        <Button text="Atualizar" onPress={onPress} />
      </Container>
    )
  }

  return null
};

export default CurrentWeather;
