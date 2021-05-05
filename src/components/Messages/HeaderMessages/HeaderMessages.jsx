import React from 'react';
import style from '../style.module.css';
import { AiOutlineSearch } from 'react-icons/all';
import MessagesHeaderName from './MessagesHeaderName';
function HeaderMessages(props) {
  return (
    <div className={style.headerMessages}>
      <div className={style.SearchAndInput}>
        <div className={style.icon}>
          <AiOutlineSearch />
        </div>
        <div className={style.InputHeaderMessages}>
          <input type="text" placeholder="Search Messages" />
        </div>
      </div>
      <div>
        <MessagesHeaderName />
      </div>
    </div>
  );
}

export default HeaderMessages;
