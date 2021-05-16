import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Inbox from './Inbox';
import OutBox from './OutBox';

function TextMessages({ messages }) {
  const myId = useSelector((state) => state.application.myId);

  const isOutgoing = messages.toUserId === myId;

  if (isOutgoing) {
    return <Inbox messages={messages} />;
  }

  return <OutBox messages={messages} />;
}

TextMessages.propTypes = {
  messages: PropTypes.object,
};

export default TextMessages;
