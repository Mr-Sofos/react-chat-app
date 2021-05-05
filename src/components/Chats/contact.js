import React from 'react';
import style from './style.module.css';
import { Link, useParams } from 'react-router-dom';
import Avatar from '../App/Avatar/Avatar';

function Contact(props) {
  const openContactId = useParams()._id;
  return (
    <Link className={style.link} to={`/${props.contact._id}`}>
      <div
        className={`${style.contact}
    ${props.contact._id === openContactId ? style.contactActive : ''}`}
      >
        <Avatar contact={props.contact} />
        <div className={style.fullNameLastMessage}>
          <div className={style.fullName}>{props.contact.fullname}</div>
          <div className={style.lastMessage}>
            {props.contact.lastMessage?.content}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Contact;
