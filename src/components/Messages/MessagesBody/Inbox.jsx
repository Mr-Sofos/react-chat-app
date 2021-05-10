import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import style from './style.module.css';

function Inbox({ messages }) {
  const opened = useParams()._id;

  const fullName = useSelector((state) =>
    state.contacts.items.find((item) => {
      return item === opened;
    }),
  );

  return (
    <div className={style.inbox}>
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
