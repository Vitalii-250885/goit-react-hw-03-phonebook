import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from "./App.module.css";
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './Form/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
state = {
    contacts: [],
    filter: '',
  }

deleteContact = (contactId) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }) );
}

addContact = (name, number) => {
  const contact = {
    id: nanoid(),
    name,
    number,
  }

  const addedContacts = this.getAddedContacts(name);
  
  (addedContacts) ? alert(`${name} is already in contacts`) :
  this.setState(({contacts}) => ({
    contacts: [contact, ...contacts]
  }))
}

getAddedContacts = (name) => {
  const { contacts } = this.state;
  return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
}

handleChange = event => {
  const {name, value} = event.currentTarget
  this.setState({[name]: value})
}

componentDidMount() {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if (parsedContacts) {
    this.setState({ contacts: parsedContacts });
  }
}

componentDidUpdate(prevProps, prevState) {

  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}

render() {

  const normalizedFilter = this.state.filter.toLowerCase();

  const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <div className={css.comtainer}>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm onSubmit={this.addContact} />
      <h2 className={css.contact_list__label}>Contacts</h2>
      <div className={css.filter}>
          <Filter value={this.state.value} onChange={this.handleChange} />
      </div>
      <ContactList
        value={this.state.filter}
        onChange={this.handleChange}
        onDeleteContact={this.deleteContact}
        visibleContacts={visibleContacts}
      />
    </div>
  )
};
}





