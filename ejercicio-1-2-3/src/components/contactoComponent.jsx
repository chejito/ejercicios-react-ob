import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';


const ContactoComponent = ({contacto}) => {
  return (
    <div>
      <h2>
        Nombre: { contacto.nombre }
      </h2>
      <h3>
        Apellido: { contacto.apellido }
      </h3>
      <h4>
        E-mail: { contacto.email }
      </h4>
      <h5>
        { contacto.conectado ? 'Contacto En Línea': 'Contacto No Disponible' } 
      </h5>
    </div>
  );
};


ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
