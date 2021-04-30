import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Connection from './Connection';
import Social from './Social';
import Media from './Media';
import Ava from './Ava';

function Profile(props) {
  const dispatch = useDispatch();

  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return item._id;
    }),
  );

  return (
    <div className={style.profile}>
      <div className={style.childProfile}>
        <Ava size={'large'} radius={10} nameLetter={profile?.fullname[0]} />
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

export default Profile;
