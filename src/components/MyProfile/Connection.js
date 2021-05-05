import React from 'react';
import style from './style.module.css';
import { FaEnvelope, IoMdVideocam, MdPhone } from 'react-icons/all';

function Connection(props) {
  return (
    <div className={style.profileContactIcons}>
      <div className={style.phone}>
        <MdPhone />
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
