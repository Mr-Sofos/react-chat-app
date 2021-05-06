import React from 'react';
import style from './style.module.css';

function Ava({ nameLetter }) {
  return <div className={style.imgAvaProfile}>{nameLetter}</div>;
}

export default Ava;
