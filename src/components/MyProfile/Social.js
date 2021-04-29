import React from 'react';
import style from './style.module.css';

function Social(props) {
  return (
    //Пока что пусто потому что нужно грузить данные с сервера(по клику на чат).
    //Если что пять сек накину
    <div className={style.profileSocial}>
      <div className={style.headSocial}>Social</div>
      <div className={style.messenger}>
        <div className={style.instagram}></div>
        <div className={style.twitter}></div>
        <div className={style.facebook}></div>
      </div>
    </div>
  );
}

export default Social;
