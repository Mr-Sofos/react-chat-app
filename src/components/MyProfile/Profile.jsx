import React from 'react';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import Connection from './Connection';
import Social from './Social';
import Media from './Media';
import PropTypes from 'prop-types';
import Avatar from '../App/Avatar/Avatar';

function Profile({ openProfileInfo }) {
  const openProfile = useSelector((state) => state.application.openProfile);
  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return openProfileInfo === item._id;
    }),
  );

  return (
    <div className={openProfile ? style.profileOpen : style.profileClose}>
      <div className={style.childProfile}>
        <Avatar contact={profile?.fullname[0]} size={'large'} />
        <div className={style.profileNameEmail}>
          <div className={style.profileName}>{profile?.fullname}</div>
          <div className={style.nick}>@{profile?.username}</div>
          <Connection />
        </div>
      </div>
      <Social socials={profile?.socials} />
      <Media />
    </div>
  );
}

Profile.propTypes = {
  openProfileInfo: PropTypes.string,
};

export default Profile;
