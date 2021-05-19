import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import style from './style.module.css';
import Avatar from '../../App/Avatar/Avatar';

function Inbox({ messages }) {
  const opened = useParams()._id;
  const contacts = useSelector((state) => state.contacts.items);

  const letterFullName = useSelector((state) =>
    contacts.find((item) => {
      return item._id === opened;
    }),
  );

  return (
    <div className={style.inbox}>
      <Avatar size={'small'} contact={letterFullName?.fullname[0]} />
      <div className={style.inboxMessage}>
        <div className={style.content}>{messages.content}</div>
        <div className={style.date}>
          <div>{moment(messages.time).format('hh:mm')}</div>
        </div>
      </div>
    </div>
  );
}

Inbox.propTypes = {
  messages: PropTypes.object,
};

export default Inbox;
