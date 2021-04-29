import React from 'react';
import style from './style.module.css';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  FaFacebookF,
  MdPhone,
} from 'react-icons/all';

function Social(props) {
  return (
    //Пока что пусто потому что нужно грузить данные с сервера(по клику на чат).
    //Если что пять сек накину
    <div className={style.profileSocial}>
      <div className={style.headSocial}>Social</div>
      <div className={style.messenger}>
        <div className={style.wrapMessenger}>
          <div className={style.instagram}>
            <div className={style.IconsImg}>
              <AiOutlineInstagram />
            </div>
          </div>
          <div className={style.twitter}>
            <div className={style.IconsImg}>
              <AiOutlineTwitter />
            </div>
          </div>
          <div className={style.facebook}>
            <div className={style.IconsImg}>
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
