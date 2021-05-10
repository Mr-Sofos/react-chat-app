import React from 'react';
import style from './style.module.css';
import moment from 'moment';
import IsRead from './IsRead';

function OutBox({ messages }) {
  return (
    <div className={style.outBox}>
      <div className={style.outBoxMessage}>
        <div className={style.content}>{messages.content}</div>
        <div className={style.dateCheck}>
          <div className={style.date}>
            {moment(messages.time).format('hh:mm')}
          </div>
          <IsRead read={messages.read} />
        </div>
      </div>
    </div>
  );
}

export default OutBox;
