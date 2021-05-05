import React from 'react';
import style from './style.module.css';
import { FaCircle } from 'react-icons/all';

function Avatar(props) {
  return (
    <div className={style.imageBlock}>
      <div className={style.avatar}>{props.contact.fullname?.[0]}</div>
      {props.contact.online ? <FaCircle className={style.online} /> : ''}
    </div>
  );
}

export default Avatar;
