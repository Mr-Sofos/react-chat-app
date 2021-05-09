import React from 'react';
import style from './style.module.css';

function Media() {
  return (
    <div className={style.profileMedia}>
      <div className={style.headMedia}>Media</div>
      <div className={style.ImgPdfMedia}>
        <div className={style.imgMedia}></div>
        <div className={style.pdf}>desktop-chat.pdf</div>
      </div>
    </div>
  );
}

export default Media;
