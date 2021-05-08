import React from 'react';
import style from '../style.module.css';
import ItemMessages from './ItemMessages';

function MessagesBody({ filter, loading, messages }) {
  const filteredMessages = messages.filter((message) =>
    message.content.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={style.messagesBody}>
      {!loading &&
        filteredMessages.map((message, index) => {
          return <ItemMessages key={index} messages={message} />;
        })}
    </div>
  );
}

export default MessagesBody;
