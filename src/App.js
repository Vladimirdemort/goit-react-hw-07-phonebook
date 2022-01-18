import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, deleteContact } from 'store/contacts/contacts-action';
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

  const formSubmit = data => {
    const friendName = data.name;
    if (storeContacts.some(({ name }) => name === friendName)) {
      alert(`${friendName} is already in contacts`);
      return;
    }

    data.id = uuidv4();

    dispatch(addContact(data));
  };

  const deleteItem = e => {
    dispatch(deleteContact(e));
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
