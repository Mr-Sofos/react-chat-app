import React from 'react';
import style from './style.module.css';
import { Link, useParams } from 'react-router-dom';
import Avatar from '../App/Avatar/Avatar';
import moment from 'moment';

function Contact({ contact }) {
  const openContactId = useParams()._id;

  const cutMessage = (text) => {
    if (text?.length > 15) {
      return text.substring(0, 15) + '...';
    }
    return text;
  };

  return (
    <Link className={style.link} to={`/${contact._id}`}>
      <div
        className={`${style.contact}
    ${contact._id === openContactId ? style.contactActive : ''}`}
      >
        <Avatar contact={contact} />

        <div className={style.contentBlock}>
          <div className={style.fullNameLastMessage}>
            <div className={style.fullName}>{contact.fullname}</div>
            <div className={style.lastMessage}>
              {cutMessage(contact.lastMessage?.content)}
            </div>
          </div>
          <div className={style.time}>
            {moment(contact.lastMessage?.time).format('hh:mm')}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Contact;
