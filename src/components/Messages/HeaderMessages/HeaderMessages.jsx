import React from 'react';
import style from '../style.module.css';
import { AiOutlineSearch } from 'react-icons/all';
import MessagesHeaderName from './MessagesHeaderName';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessages } from '../../../redux/ducks/messages';
import PreloaderNameAndOnlineMessages from './PreloaderNameAndOnlineMessages';
import ClearSearchMessages from './ClearSearchMessages';
import OpenBlockProfile from './OpenBlockProfile';

function HeaderMessages({ filter }) {
  const dispatch = useDispatch();
  const loadingHeaderMessages = useSelector((state) => state.messages.loading);

  const handleSearch = (e) => {
    dispatch(setFilterMessages(e.target.value));
  };

  return (
    <div className={style.headerMessages}>
      <div className={style.SearchAndInput}>
        <div className={style.iconSearchMessages}>
          <AiOutlineSearch className={style.AiOutlineSearch} />
        </div>
        <div className={style.InputHeaderMessages}>
          <input type="text" onChange={handleSearch} value={filter} />
        </div>
        <ClearSearchMessages filter={filter} />
      </div>
      {!loadingHeaderMessages ? (
        <PreloaderNameAndOnlineMessages />
      ) : (
        <MessagesHeaderName />
      )}
      <OpenBlockProfile />
    </div>
  );
}

export default HeaderMessages;
