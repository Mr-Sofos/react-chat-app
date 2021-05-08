import React from 'react';
import { useSelector } from 'react-redux';
import Inbox from './Inbox';
import OutBox from './OutBox';

function TextMessages ({ messages }) {
  const myId = useSelector(state => state.application.myId)

  const isOutgoing = messages.toUserId === myId;

  if(isOutgoing) {
    return <Inbox messages={messages} />
  }

  return <OutBox messages={messages} />
}

export default TextMessages;