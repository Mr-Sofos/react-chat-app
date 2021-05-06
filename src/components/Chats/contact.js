import React from 'react';
import style from './style.module.css';
import { Link, useParams } from 'react-router-dom';
import Avatar from '../App/Avatar/Avatar';
import moment from 'moment';

function Contact(props) {
  const openContactId = useParams()._id;

  const cutMessage = (text) => {
    if (text?.length > 15) {
      return text.substring(0, 15) + '...';
    }
    return text;
  };

  return (
    <Link className={style.link} to={`/${props.contact._id}`}>
      <div
        className={`${style.contact}
    ${props.contact._id === openContactId ? style.contactActive : ''}`}
      >
        <Avatar contact={props.contact} />
        <div className={style.contentBlock}>
          <div className={style.fullNameLastMessage}>
            <div className={style.fullName}>
              {props.contact.fullname}
            </div>
            <div className={style.lastMessage}>
              {cutMessage(props.contact.lastMessage?.content)}
            </div>
          </div>
            <div className={style.time}>
              {moment(props.contact.lastMessage?.time).format('hh:mm')}
            </div>
        </div>
      </div>
    </Link>
  );
}

export default Contact;
