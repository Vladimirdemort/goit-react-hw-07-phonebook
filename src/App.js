import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputArea from 'components/InputArea/InputArea';
import Contacts from 'components/Contacts/Contacts';
import Section from 'components/Section';
import Filter from 'components/Filter/Filter';

console.dir(uuidv4());

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    const friendName = data.name;
    if (this.state.contacts.some(({ name }) => name === friendName)) {
      alert(`${friendName} is already in contacts`);
      return;
    }

    data.id = uuidv4();
    const setContact = this.state.contacts;

    setContact.push(data);
    console.log(data);
    this.setState({
      contacts: setContact,
    });
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  nameFilter = e => {
    this.setState({
      filter: e.value,
    });
  };

  filteredList = () => {
    const { contacts, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(toLowerCaseFilter);
    });
  };

  deleteItem = e => {
    console.log(e);
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== e),
    }));
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({
      contacts: parsedContacts,
    });
    console.log(parsedContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterSearch = this.filteredList();

    return (
      <>
        <Section title={'Phonebok'}>
          <InputArea onSubmit={this.formSubmit} />
        </Section>
        <Section title={'Contacts'}>
          <Filter filter={this.nameFilter} filterValue={this.state.filter} />
          <Contacts
            contactData={filterSearch}
            onContactDelete={this.deleteItem}
          />
        </Section>
      </>
    );
  }
}

export default App;
