import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import InfoBox from '../InfoBox';
import HourlyBoxItem from './Item';

const HourlyBox = () => {
  const weather = useSelector(state => state.weather.data);
  const renderItem = ({ item }) => <HourlyBoxItem hour={item} />

  if(weather) {
    return (
      <InfoBox title="Próximas horas">
        <FlatList
          data={weather.hourly}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.dt)}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </InfoBox>
    )
  }

  return null
};

export default HourlyBox;
