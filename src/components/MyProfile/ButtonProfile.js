import React from 'react';
import style from './style.module.css';

function ButtonProfile({ openProfile, setOpenProfile }) {
  return (
    <div className={style.button}>
      <div
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
      </div>
    </div>
  );
}

export default ButtonProfile;
