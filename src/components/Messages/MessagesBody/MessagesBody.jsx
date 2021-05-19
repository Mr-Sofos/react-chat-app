import PropTypes from 'prop-types';
import ItemMessages from './ItemMessages';
import style from '../style.module.css';

function MessagesBody({ filter, loading, messages }) {
  const filteredMessages = messages.filter((message) =>
    message.content.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={style.messagesBody} id="chat-window">
      {!loading &&
        filteredMessages.map((message, index) => {
          return <ItemMessages key={index} messages={message} />;
        })}
    </div>
  );
}

MessagesBody.propTypes = {
  filter: PropTypes.string,
  loading: PropTypes.bool,
  messages: PropTypes.array,
};

export default MessagesBody;
