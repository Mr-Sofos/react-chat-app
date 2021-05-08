import React from 'react';
import style from './style.module.css'

function InfoBox ({ content }) {
  return (
    <div className={style.infoBox}>{content}</div>
  );
}

export default InfoBox;