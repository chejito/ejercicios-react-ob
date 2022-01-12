import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/contactList.css'
import { Contact } from '../models/contact.class';
import ContactComponent from './contact';
import Contactform from './contactForm';


const ContactListComponent = () => {

  const defaultContact1 = new Contact('Name1', 'name1@example.com', '+34 567 890 134', false)
  const defaultContact2 = new Contact('Name2', 'name2@example.com', '+34 890 567 134', true)
  const defaultContact3 = new Contact('Name3', 'name3@example.com', '+34 134 567 890', false)

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3])

  function connectContact(contact) {
    console.log(`Connected contact: ${contact.name}`)
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts[index].connected = !tempContacts[index].connected
    setContacts(tempContacts)
  }

  function deleteContact(contact) {
    console.log(`Deleted contact: ${contact.name}`)
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts.splice(index, 1)
    setContacts(tempContacts)
  }

  function addContact(contact) {
    console.log(`Created contact: ${contact.name}`)
    const tempContacts = [...contacts]
    tempContacts.push(contact)
    setContacts(tempContacts)
  }

  return (
    <div className='contact-list'>
      <h1 className='contact-list-header'>
        Lista de Contactos
      </h1>
      <Contactform add={addContact}/>
      <div className='contact-list-body'>
        { contacts.map((contact, index) => (
          <ContactComponent
            key={index}
            contact={contact}
            connect={connectContact}
            remove={deleteContact}
          />
        ))}
      </div>      
    </div>
  );
};


export default ContactListComponent;
