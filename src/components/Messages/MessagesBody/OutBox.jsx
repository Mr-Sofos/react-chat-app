import PropTypes from 'prop-types';
import moment from 'moment';
import { GrFormClock } from 'react-icons/all';
import IsRead from './IsRead';
import style from './style.module.css';

function OutBox({ messages }) {
  return (
    <div className={style.outBox}>
      <div className={style.outBoxMessage}>
        <div className={style.content}>{messages.content}</div>
        <div className={style.dateCheck}>
          <div className={style.date}>
            {moment(messages.time).format('hh:mm')}
          </div>
          {messages.sending ? <GrFormClock /> : <IsRead read={messages.read} />}
        </div>
      </div>
    </div>
  );
}

OutBox.propTypes = {
  messages: PropTypes.object,
};

export default OutBox;
