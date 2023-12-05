import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import ContactListItem from './ContactListItem';
import {mapContacts} from './Store';
import {fetchContactsSuccess} from './Store';
import _ from 'lodash';

const keyExtractor = ({phone}) => phone;

const fetchContacts = async () => {
  const data = await fetch('https://randomuser.me/api/?results=50');
  const ContactData = await data.json();
  return ContactData.results.map(mapContacts);
};
const Contacts = ({navigation}) => {
  const {contacts} = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(e => {});
  }, []);

  const renderContacts = ({item}) => {
    const {name, avatar, phone} = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('ProfileContact', {contact: item})}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={renderContacts}
      />
    </View>
  );
};
export default Contacts;
