import React from 'react';
import style from './style.module.css';

function Connection(props) {
  return (
    <div className={style.profileContactIcons}>
      <div className={style.phone}>
        <span className="material-icons">call</span>
      </div>
      <div className={style.videocam}>
        <span className="material-icons">videocam</span>
      </div>
      <div className={style.envelope}>
        <span className="material-icons">email</span>
      </div>
    </div>
  );
}

export default Connection;
