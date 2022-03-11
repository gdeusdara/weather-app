import { FlatList } from 'react-native'
import InfoBox from '../InfoBox';

const ListBoxTemplate = ({ list = [], renderItem = () => {}, title, horizontal = false }) => {
  return (
    <InfoBox title={title}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.dt)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={horizontal}
      />
    </InfoBox>
  )
};

export default ListBoxTemplate;
