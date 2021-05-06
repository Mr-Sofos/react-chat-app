import React from 'react';
import style from '../style.module.css';

function MessagesBody({ loading, messages }) {
  return (
    <div className={style.messagesBody}>
      {!loading &&
        messages.map((message, index) => {
          return <div className={style.message} key={index}>{message.content}</div>;
        })}
    </div>
  );
}

export default MessagesBody;
