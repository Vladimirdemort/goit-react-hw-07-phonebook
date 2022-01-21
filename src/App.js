import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import contactsOperations from 'store/contacts/contacts-operation';
import {
  getContacts,
  getVisibleContacts,
} from 'store/contacts/contacts-selector';
import InputArea from 'components/InputArea/InputArea';
import Contacts from 'components/Contacts/Contacts';
import Section from 'components/Section';
import Filter from 'components/Filter/Filter';

function App() {
  const storeContacts = useSelector(getVisibleContacts);
  console.log(storeContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const formSubmit = data => {
    const friendName = data.name;
    if (storeContacts.some(({ name }) => name === friendName)) {
      alert(`${friendName} is already in contacts`);
      return;
    }

    data.id = uuidv4();

    dispatch(contactsOperations.addContact(data));
  };

  const deleteItem = e => {
    dispatch(contactsOperations.deleteContact(e));
  };

  return (
    <>
      <Section title={'Phonebok'}>
        <InputArea onSubmit={formSubmit} />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts contactData={storeContacts} onContactDelete={deleteItem} />
      </Section>
    </>
  );
}

export default App;
