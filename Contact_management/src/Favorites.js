import 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ContactThum from './ContactThum';
import {FlatList, View} from 'react-native';

const keyExtractor = ({phone}) => phone;

const Favorites = ({navigation}) => {
  const {contacts} = useSelector(state => state);
  const renderFavoriteThumbnail = ({item}) => {
    const {avatar} = item;
    return (
      <ContactThum
        avatar={avatar}
        onPress={() => navigation.navigate('ProfileContact', {contact: item})}
      />
    );
  };
  const favorites = contacts.filter(contact => contact.favorites);
  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        numColumns={3}
        renderItem={renderFavoriteThumbnail}
      />
    </View>
  );
};
export default Favorites;
