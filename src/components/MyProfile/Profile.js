import React from 'react';
import style from './style.module.css';

function Profile(props) {
  return (
    //Тут будут данные профиля. Пока пусто потому что нужно грузить с сервера
    <div className={style.profile}>
      <div className={style.profileAvatar}></div>
      <div className={style.profileNameEmail}>
        <div className={style.profileName}></div>
        <div className={style.profileEmail}></div>
      </div>
      <div className={style.profileContactIcons}></div>
    </div>
  );
}

export default Profile;
