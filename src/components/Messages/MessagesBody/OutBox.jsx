import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import moment from 'moment';
import IsRead from './IsRead';
import { GrFormClock } from 'react-icons/all';

function OutBox({ messages }) {

  return (
    <div className={style.outBox}>
      <div className={style.outBoxMessage}>
        <div className={style.content}>{messages.content}</div>
        <div className={style.dateCheck}>
          <div className={style.date}>
            {moment(messages.time).format('hh:mm')}
          </div>
          {messages.sending ? <GrFormClock /> : <IsRead read={messages.read} />}
        </div>
      </div>
    </div>
  );
}

OutBox.propTypes = {
  messages: PropTypes.object,
};

export default OutBox;
