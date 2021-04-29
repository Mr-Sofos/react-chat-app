import React from 'react';
import style from './style.module.css';
import { MdPhone, IoMdVideocam, FaEnvelope } from 'react-icons/all';

function Profile(props) {
  return (
    //Тут будут данные профиля. Пока пусто потому что нужно грузить с сервера
    <div className={style.profile}>
      <div className={style.profileAvatar}>
        <div className={style.imgAva}></div>
      </div>
      <div className={style.profileNameEmail}>
        <div className={style.profileName}></div>
        <div className={style.profileEmail}></div>
      </div>
      <div className={style.profileContactIcons}>
        <div className={style.insta}>
          <MdPhone />
        </div>
        <div className={style.twitter}>
          <IoMdVideocam />
        </div>
        <div className={style.facebook}>
          <FaEnvelope />
        </div>
      </div>
    </div>
  );
}

export default Profile;
