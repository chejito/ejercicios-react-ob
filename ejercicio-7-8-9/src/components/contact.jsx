import React from 'react';
import PropTypes from 'prop-types';
import '../styles/contact.css'
import { Contact } from '../models/contact.class';


const ContactComponent = ({ contact, connect, remove }) => {

  function renderConnected(connected) {
    return (
      connected ? 
        <span className='user-connected user-on'>
          Conectado
        </span> : 
        <span className='user-connected user-off'>
          No disponible
        </span>
    )
  }

  function connectedIcon(connected) {
    return(
      contact.connected ?
          <button onClick={() => connect(contact)} className='material-icons connect-icon contact-button toggle-on'>
            toggle_on    
          </button> :
          <button onClick={() => connect(contact)} className='material-icons connect-icon contact-button toggle-off'>
            toggle_off    
          </button>
    )    
  }

  return (
    <div className='contact-card'>
      <h3 className='contact-data'>
        <span className='material-icons user-icon'>
          person
        </span>
        {contact.name}
      </h3> 
      <h3 className='contact-data'>
        <span className='material-icons user-icon'>
          email
        </span> 
        {contact.email}</h3>
      <h3 className='contact-data'>
        <span className='material-icons user-icon'>
          phone
        </span> 
        {contact.phoneNumber}</h3>
      <h3 style={{color: 'white'}}>
        {renderConnected(contact.connected)}
      </h3>
      <div className='button-bar'>
        <button onClick={() => remove(contact)} className='material-icons delete-icon contact-button'>
            delete_forever
        </button>
        {connectedIcon(contact.connected)}
      </div>      
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  connect: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default ContactComponent;
