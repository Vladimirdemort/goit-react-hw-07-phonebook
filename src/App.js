import './App.css';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import InputArea from 'components/InputArea/InputArea';
import Contacts from 'components/Contacts/Contacts';
import Section from 'components/Section';
import Filter from 'components/Filter/Filter';

console.dir(uuidv4())

class App extends React.Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }


  formSubmit = data => {
    data.id = uuidv4();
    const setContact = this.state.contacts

    setContact.push(data)
    console.log(data)
    this.setState({
      contacts: setContact
    })
  }

  nameFilter = e => {
    this.setState({
      filter: e.value
    })
  }

  filteredList = () =>{
    const {contacts, filter} = this.state;
    const toLowerCaseFilter = filter.toLowerCase();

    return contacts.filter( (contact) => {
     return  contact.name.toLowerCase().includes(toLowerCaseFilter)
    })
  }

  render() {
    const filterSearch = this.filteredList();
    console.log(filterSearch)
  return (
    <>
    <Section title={'Phonebok'}>
    <InputArea onSubmit ={this.formSubmit}/>
    </Section>
    <Section title={"Contacts"}>
      <Filter filter={this.nameFilter} filterValue={this.state.filter}/>
    <Contacts contactData={filterSearch} />
    </Section>
    </>
    )
  }
}

export default App;