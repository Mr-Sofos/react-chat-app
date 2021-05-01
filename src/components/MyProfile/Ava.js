import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';

function Ava({ nameLetter, size, radius }) {
  return (
    <div size={size} className={style.imgAvaProfile}>
      {nameLetter}
    </div>
  );
}

export default Ava;
