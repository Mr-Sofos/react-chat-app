import React from 'react';
import style from './style.module.css';
import { IoMdVideocam, IoMdCall, FaEnvelope } from 'react-icons/all';

function Connection(props) {
  return (
    <div className={style.profileContactIcons}>
      <div className={style.phone}>
        <IoMdCall />
      </div>
      <div className={style.videocam}>
        <IoMdVideocam />
      </div>
      <div className={style.envelope}>
        <FaEnvelope />
      </div>
    </div>
  );
}

export default Connection;
