import React from 'react';
import style from '../style.module.css';
import { AiOutlineSearch } from 'react-icons/all';

function HeaderMessages(props) {
  return (
    <div className={style.headerMessages}>
      <div className={style.icon}>
        <AiOutlineSearch />
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
}

export default HeaderMessages;
