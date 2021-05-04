import HeaderMessages from './HeaderMessages/HeaderMessages';
import style from './style.module.css';
import SendMessages from './SendMessages/SendMessages';
import MessagesBody from './MessagesBody/MessagesBody';
import { useEffect } from 'react';
import { loadMessages } from '../../redux/ducks/messages';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Messages() {
  const loading = useSelector((state) => state.messages.loading);

  const dispatch = useDispatch();

  const opened = useParams()._id;

  const myId = useSelector((state) => state.application.myId);

  const messages = useSelector((state) => state.messages.items);

  useEffect(() => {
    if (opened) {
      dispatch(loadMessages(myId, opened));
    }
  }, [dispatch, opened, myId]);

  if (!opened) {
    return (
      <div className={style.selectChat}>
        <div>Выбери чат, чтобы начать переписку</div>
      </div>
    );
  }
  return (
    <div className={style.messages}>
      <HeaderMessages />
      <MessagesBody messages={messages} loading={loading} />
      <SendMessages />
    </div>
  );
}

export default Messages;
