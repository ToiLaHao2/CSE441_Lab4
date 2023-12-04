import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, Text, View} from 'react-native';

const ContactThum = ({name, phone, avatar, textColor, onPress}) => {
  const colorStyle = {
    color: textColor,
  };

  const ImageContact = onPress ? TouchableOpacity : View;

  return (
    <View>
      <ImageContact onPress={onPress}>
        <Image source={{uri: avatar}} />
      </ImageContact>
      {name !== '' && <Text>{name}</Text>}
      {phone !== '' && (
        <View>
          <Icon name="phone" size={16} />
          <Text>{phone}</Text>
        </View>
      )}
    </View>
  );
};

export default ContactThum;
ContactThum.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
}
ContactThum.defaultProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress: null,
}
