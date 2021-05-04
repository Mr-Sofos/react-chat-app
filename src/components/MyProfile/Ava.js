import React from 'react';
import style from './style.module.css';

function Ava({ nameLetter, size, radius }) {
  return (
    <div size={size} className={style.imgAvaProfile}>
      {nameLetter}
    </div>
  );
}

export default Ava;
