import React from 'react';
import style from '../style.module.css';
import { MdAutorenew } from 'react-icons/all';

function PreloaderNameAndOnlineMessages() {
  return (
    <div className={style.wrapLoaderAndText}>
      <div className={style.preloaderHeader}>
        <MdAutorenew className={style.autorenewPreloaderHeader} />
      </div>
      <div className={style.headloadertext}>Загрузка чата...</div>
    </div>
  );
}

export default PreloaderNameAndOnlineMessages;
