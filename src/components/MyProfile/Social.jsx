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
          <div className={style.wrapIconsAndSocial}>
            {socials ? (
              <div className={style.IconsAndSocialNickname}>
                <AiOutlineInstagram />
                <span>{socials.instagram}</span>
              </div>
            ) : (
              ''
            )}
            {socials ? (
              <div className={style.IconsAndSocialNickname}>
                <AiOutlineTwitter />
                <span>{socials.twitter}</span>
              </div>
            ) : (
              ''
            )}
            {socials ? (
              <div className={style.IconsAndSocialNickname}>
                <FaFacebookF />
                <span>{socials.facebook}</span>
              </div>
            ) : (
              ''
            )}
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
