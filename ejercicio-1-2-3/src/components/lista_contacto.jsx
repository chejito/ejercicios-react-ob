import React from 'react';
import { Contacto } from '../models/contacto.class';
import ContactoComponent from './contactoComponent';

const ListaContactoComponent = () => {

  const contactoPorDefecto = new Contacto(
    'NombreEjemplo', 
    'ApellidoEjemplo',
    'emailejemplo@ejemplo.com', 
    false
  )

  return (
    <div>
      <h1>
        Tus contactos:
      </h1>
      <ContactoComponent contacto={ contactoPorDefecto }></ContactoComponent>
    </div>
  );
}

export default ListaContactoComponent;
