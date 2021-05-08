import React from 'react';
import style from '../style.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCircle, MdAutorenew } from 'react-icons/all';

function PreloaderNameAndOnlineMessages(props) {
  const OfflineOrOnlineContact = useParams()._id;

  const Contact = useSelector((state) =>
    state.contacts.items.find((item) => {
      return OfflineOrOnlineContact === item._id;
    }),
  );

  return (
    <div className={style.wrapLoaderAndText}>
      <div className={style.preloaderHeader}>
        <MdAutorenew className={style.autorenewPreloaderHeader} />
      </div>
      <div className={style.headloadertext}>Загрузка чата</div>
      {Contact?.online ? (
        <FaCircle className={style.messagesHeaderPreloaderOnline} />
      ) : (
        <FaCircle className={style.messagesHeaderPreloaderOffline} />
      )}
    </div>
  );
}

export default PreloaderNameAndOnlineMessages;
