import style from './style.module.css';
import { Route, useParams } from 'react-router-dom';
import Ava from './Ava';
import Connection from './Connection';
import Social from './Social';
import Media from './Media';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

function MyProfile() {
  const [openProfile, setOpenProfile] = useState(false);
  // const showOpenProfile = () => setOpenProfile(!openProfile);

  const dispatch = useDispatch();
  const opened = useParams().id;

  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
     return opened === item.id;
    }),
  );

  return (
    <Route path="/:_id?">
      <div className={style.button}>
        <div className={style.buttonProfile} onClick={()=>setOpenProfile(!openProfile)}>
          {!openProfile ? (
            <div className={style.letterButtonProfile}>
              <div>O</div>
              <div>P</div>
              <div>E</div>
              <div>N</div>
            </div>
          ) : (
            <div className={style.letterButtonProfile}>
              <div>D</div>
              <div>E</div>
              <div>L</div>
              <div>E</div>
              <div>T</div>
              <div>E</div>
            </div>
          )}
        </div>
      </div>
      <CSSTransition unmountOnExit mountOnEnter timeout={{
        appear: 1000,
        enter: 1000,
        exit: 1000,
      }} in={openProfile} classNames={!openProfile ? style.profile : style['profile-done']}
      >
        <div className={!openProfile ? style.profile : style['profile-done']}>
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
      </CSSTransition>
    </Route>
  );
}

export default MyProfile;
