import {View} from 'react-native';
import ContactThum from './ContactThum';
import IconButton from'react-native-paper';

const ProfileContact = ({route}) => {
  const {contact} = route.params;
  const {id, avatar, name, email, phone, cell, favorite} = contact;

  const DetailItem = ({iconName, title, content}) => (
    <View style={styles.detailsSectionItem}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Icon name={iconName} size={30} color="black" />
      </View>
      <View style={{flex: 4}}>
        <Text style={styles.detailsSectionItemContent1}>{title}</Text>
        <Text style={styles.detailsSectionItemContent2}>{content}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <View>
        <ContactThum avatar={avatar} name={name} phone={phone} />
      </View>
      <View>
        <DetailItem iconName="email" title="Email" content={email} />
        <DetailItem iconName="phone" title="Work" content={phone} />
        <DetailItem iconName="smartphone" title="Personal" content={cell} />
        <View>
          <IconButton
            icon={favorite == true ? 'star-check' : 'star-check-outline'}
            iconColor="#663399"
            size={20}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileContact;
