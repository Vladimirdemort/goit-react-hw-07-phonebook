import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

import InputArea from 'components/InputArea/InputArea';
import Contacts from 'components/Contacts/Contacts';
import Section from 'components/Section';
import Filter from 'components/Filter/Filter';

const INITIAL_CONTACTS_LIST = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem("contacts")) ?? INITIAL_CONTACTS_LIST
  );
  const [filter, setFilter] = useState('');

  const formSubmit = data => {
    const friendName = data.name;
    if (contacts.some(({ name }) => name === friendName)) {
      alert(`${friendName} is already in contacts`);
      return;
    }

    data.id = uuidv4();

    
    setContacts(prev => [...prev, data]);
    
    console.log(`${data} 35 string`)
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const nameFilter = e => {
   
    setFilter(e.value);
  };

  const filteredList = () => {
    const toLowerCaseFilter = filter.toLowerCase();
    console.log(contacts)
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(toLowerCaseFilter);
    });
  };
  const deleteItem = e => {
    setContacts(prevState => prevState.filter(contact => contact.id !== e));
  };

  useEffect(() => {
 
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title={'Phonebok'}>
        <InputArea onSubmit={formSubmit} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filter={nameFilter} filterValue={filter} />
        <Contacts contactData={filteredList()} onContactDelete={deleteItem} />
      </Section>
    </>
  );
}

export default App;
