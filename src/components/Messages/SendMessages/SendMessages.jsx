import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sendMessage } from '../../../redux/ducks/messages';
import { useHotkeys } from 'react-hotkeys-hook';
import { TextareaAutosize } from '@material-ui/core';
import ButtonScrip from './ButtonScrip';
import ButtonMicrophoneSend from './ButtonMicrophoneSend';
import style from './style.module.css';
import { GrEmoji } from 'react-icons/all'

function SendMessages() {
  const dispatch = useDispatch();
  const opened = useParams()._id;
  const myId = useSelector((state) => state.application.myId);

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const sentMessage = () => {
    if (content?.length === 0) return;
    dispatch(sendMessage(opened, myId, content));
    setContent('');
  };

  useHotkeys('shift+enter', (event) => {
    event.preventDefault();
    setContent((content) => content + '\n');
  });

  useHotkeys(
    'enter',
    (e) => {
      e.preventDefault();
      sentMessage();
    },
    [content],
  );

  return (
    <div className={style.form}>
      <TextareaAutosize
        onChange={handleChange}
        value={content}
        className={style.sendForm}
        placeholder="Write a message..."
        maxrows="5"
      />
      <ButtonScrip />
      <ButtonMicrophoneSend
        sentMessage={sentMessage}
        message={content?.length > 0}
      />
    </div>
  );
}

export default SendMessages;
