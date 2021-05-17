import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCircle } from 'react-icons/all';
import style from '../style.module.css';

function MessagesHeaderName() {
  const openProfileName = useParams()._id;

  const NameHeaderContact = useSelector((state) =>
    state.contacts.items.find((item) => {
      return openProfileName === item._id;
    }),
  );

  return (
    <div className={style.headerNameAndOnline}>
      <div className={style.headerName}>{NameHeaderContact?.fullname}</div>
      <div>
        {NameHeaderContact?.online ? (
          <FaCircle className={style.messagesHeaderOnline} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default MessagesHeaderName;
