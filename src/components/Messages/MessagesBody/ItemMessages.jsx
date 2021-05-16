import React from 'react';
import PropTypes from 'prop-types';
import TextMessages from './TextMessages';
import InfoBox from './InfoBox';

function ItemMessages({ messages }) {
  if (messages.type === 'text') {
    return <TextMessages messages={messages} />;
  }

  return <InfoBox content={messages.content} />;
}

ItemMessages.propTypes = {
  messages: PropTypes.object,
};

export default ItemMessages;
