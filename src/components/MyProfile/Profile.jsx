import React from 'react';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import Connection from './Connection';
import Social from './Social';
import Media from './Media';
import Ava from './Ava';

function Profile({ openProfileInfo }) {
  const openProfile = useSelector((state) => state.application.openProfile);
  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return openProfileInfo === item._id;
    }),
  );

  return (
    <div>
      <div className={openProfile ? style.profile : style['profile-done']}>
        <div className={style.childProfile}>
          <Ava
            size={style.small}
            radius={10}
            nameLetter={profile?.fullname[0]}
          />
          <div className={style.profileNameEmail}>
            <div className={style.profileName}>{profile?.fullname}</div>
            <div className={style.nick}>@{profile?.username}</div>
            <Connection />
          </div>
        </div>
        <Social socials={profile?.socials} />
        <Media />
      </div>
    </div>
  );
}

export default Profile;
