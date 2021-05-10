import React from 'react';
import classNames from "classnames";
import style from './style.module.css';
import { FaCircle } from 'react-icons/all';

function Avatar({ size, contact }) {

  return (
    <div className={style.imageBlock}>
      <div className={style.avatar}>{contact.fullname?.[0]}</div>
      {contact.online ? <FaCircle className={style.online} /> : ''}
    </div>
  );
}

export default Avatar;
