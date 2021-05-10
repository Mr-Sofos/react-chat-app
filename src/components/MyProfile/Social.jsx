import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  FaFacebookF,
} from 'react-icons/all';

function Social({ socials }) {
  return (
    <div className={style.profileSocial}>
      <div className={style.headSocial}>Social</div>
      <div className={style.messenger}>
        <div className={style.wrapMessenger}>
          <div className={style.wrapIconsSocial}>
            <div className={style.IconsImg}>
              <AiOutlineInstagram />
            </div>
            <div className={style.IconsImg}>
              <AiOutlineTwitter />
            </div>
            <div className={style.IconsImg}>
              <FaFacebookF />
            </div>
          </div>
          <div className={style.loginIconSocial}>
            {socials &&
              Object.keys(socials).map((social, index) => {
                return (
                  <div className={style.socialNickname} key={index}>
                    {socials[social]}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

Social.propTypes = {
  socials: PropTypes.object,
};

export default Social;
