import React from 'react';
import style from '../style.module.css';
import { AiOutlineSearch } from 'react-icons/all';
import MessagesHeaderName from './MessagesHeaderName';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessages } from '../../../redux/ducks/messages';
import PreloaderNameAndOnlineMessages from './PreloaderNameAndOnlineMessages';
import { profileContactOpen } from '../../../redux/ducks/application';

function HeaderMessages({ filter }) {
  const dispatch = useDispatch();
  const loadingHeaderMessages = useSelector((state) => state.messages.loading);

  const handleClick = () => {
    dispatch(profileContactOpen());
  };

  const handleSearch = (e) => {
    dispatch(setFilterMessages(e.target.value));
  };

  const clearSearchMessages = () => {
    dispatch(setFilterMessages(''));
  };

  return (
    <div className={style.headerMessages}>
      <div className={style.SearchAndInput}>
        <div className={style.icon}>
          <AiOutlineSearch />
        </div>
        <div className={style.InputHeaderMessages}>
          <input
            type="text"
            placeholder="Search Messages"
            onChange={handleSearch}
            value={filter}
          />
        </div>
        <div className={style.clear}>
          <span className="material-icons" onClick={clearSearchMessages}>
            clear
          </span>
        </div>
      </div>
      {loadingHeaderMessages ? (
        <PreloaderNameAndOnlineMessages />
      ) : (
        <div>
          <MessagesHeaderName />
        </div>
      )}
      <div className={style.settingsHeaderMessages}>
        <span className="material-icons" onClick={handleClick}>
          settings
        </span>
      </div>
    </div>
  );
}

export default HeaderMessages;
