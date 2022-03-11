import formatNumber from '../../../utils/formatNumber';
import Animation from '../../Animation';
import { Container, Hour, Temperature } from './styles';

const HourlyBoxItem = ({ hour }) => {

    const time = new Date(hour.dt * 1000).getHours();
    return (
      <Container>
        <Hour>{formatNumber(time)}</Hour>
        <Animation weather={hour} />
        <Temperature>{formatNumber(hour.temp)}º</Temperature>
      </Container>
    )
};

export default HourlyBoxItem;
