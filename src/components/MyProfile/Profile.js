import React, { useState } from 'react';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import Connection from './Connection';
import Social from './Social';
import Media from './Media';
import Ava from './Ava';
import { Route } from 'react-router-dom';
import ButtonProfile from './ButtonProfile';

function Profile({ openProfileInfo }) {
  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return openProfileInfo === item._id;
    }),
  );
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <Route path="/:_id?">
      <ButtonProfile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
      />
      <div className={openProfile ? style.profile : style['profile-done']}>
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
    </Route>
  );
}

export default Profile;
