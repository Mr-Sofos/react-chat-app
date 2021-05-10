import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';
import classNames from "classnames";

function Ava({ nameLetter, size, radius }) {
  const switchClass = classNames(
    'large',
    { small: size === 'small' },
    { medium: size === 'medium' },
    { large: size === 'large' }
  );

  return (
    <div className={style[switchClass]}
         style={{borderRadius:radius}}
    >
      {nameLetter}
    </div>
  );
}

Ava.propTypes = {
  radius: PropTypes.number,
  nameLetter: PropTypes.string,
}

export default Ava;
