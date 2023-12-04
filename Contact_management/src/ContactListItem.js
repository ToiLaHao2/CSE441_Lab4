const {TouchableHighlight, View, Image, Text} = require('react-native');

const ContactListItem = ({name, avatar, phone, onPress}) => {
  return (
    <TouchableHighlight underlayColor="grey" onPress={onPress}>
      <View>
        <Image source={{uri: avatar}} />
        <View>
          <Text>{name}</Text>
          <Text>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;
