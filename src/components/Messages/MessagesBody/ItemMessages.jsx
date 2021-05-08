import React from 'react';
import TextMessages from './TextMessages';
import InfoBox from './InfoBox';

function ItemMessages({ messages }) {
  if (messages.type === 'text') {
    return <TextMessages messages={messages} />;
  }

  return <InfoBox content={messages.content} />;
}

export default ItemMessages;
