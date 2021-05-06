import React from 'react';
import style from '../style.module.css';
import { AiOutlineSearch } from 'react-icons/all';
import MessagesHeaderName from './MessagesHeaderName';
import { useDispatch } from 'react-redux';
import { setFilterMessages } from '../../../redux/ducks/messages';

function HeaderMessages({ filter }) {
  const dispatch = useDispatch();

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
      <div>
        <MessagesHeaderName />
      </div>
    </div>
  );
}

export default HeaderMessages;
