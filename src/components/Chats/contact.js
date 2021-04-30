import React from 'react';
import style from './style.module.css';
import { Link, useParams } from 'react-router-dom'


function Contact(props) {
  const openContactId = useParams()._id
  return (
    <div className={`${style.contact}
    ${props.contact._id === openContactId ? 
      style.contactActive : ''}`}>
      <div className={style.fullName}>
        <Link className={style.link} to={`/${props.contact._id}`}>
          {props.contact.fullname}
        </Link>
      </div>
    </div>
  );
}

export default Contact;