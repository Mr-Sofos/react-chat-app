import React from 'react';
import style from './style.module.css';
import { AiOutlineSearch } from 'react-icons/all';

function Messages() {
  return <div className={style.messages}>
    <div>
      <div className={style.icon}><AiOutlineSearch /></div>
      <input type='text'/>
    </div>
    <div></div>
    <div>

    </div>
  </div>;
}

export default Messages;
