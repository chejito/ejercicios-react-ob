import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import '../styles/contactForm.css'


const Contactform = ({add}) => {

  const nameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef('')

  function addContact(e) {
    e.preventDefault()
    const newContact = new Contact(
      nameRef.current.value,
      emailRef.current.value,
      phoneRef.current.value,
      false
    )
    add(newContact)
  }

  return (
    <form onSubmit={addContact} className='contact-form'>
      <input ref={nameRef} id='inputName' type='text' className='contact-form-input' required autoFocus placeholder='Contact Name'/>
      <input ref={emailRef} id='inputEmail' type='text' className='contact-form-input' required placeholder='Contact E-mail'/>
      <input ref={phoneRef} id='inputPhone' type='text' className='contact-form-input' required placeholder='Contact Phone Number'/>
      <button type='submit' className='submit-button'>Add</button>
    </form>
  );
};


Contactform.propTypes = {
  add: PropTypes.func.isRequired
};


export default Contactform;
