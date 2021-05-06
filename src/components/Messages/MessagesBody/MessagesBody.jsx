import React from 'react';
import style from '../style.module.css';

function MessagesBody({ filter, loading, messages }) {
  const filteredMessages = messages.filter((message) =>
    message.content.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={style.messagesBody}>
      {!loading &&
        filteredMessages.map((message, index) => {
          return <div key={index}>{message.content}</div>;
        })}
    </div>
  );
}

export default MessagesBody;
