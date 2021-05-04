import React, { useState } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Connection from './Connection';
import Social from './Social';
import Media from './Media';
import Ava from './Ava';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function Profile(props) {
  const [openProfile, setOpenProfile] = useState(false);

  const dispatch = useDispatch();
  const opened = useParams().id;

  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return item._id;
    }),
  );

  return (
    <div>
      <button
        className={style.buttonProfile}
        onClick={() => setOpenProfile(!openProfile)}
      >
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
      </button>

      <CSSTransition
        in={openProfile}
        timeout={300}
        classNames={style.profile}
        mountOnEnter
        unmountOnExit
      >
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
      </CSSTransition>
    </div>
  );
}

export default Profile;
