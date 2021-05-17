import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/all';
import style from './style.module.css';

function Avatar({ size, contact, contactOnline }) {
  return (
    <div className={style.imageBlock}>
      <div className={style[size]}>
        {contact}
        {contactOnline ? <FaCircle className={style.online} /> : ''}
      </div>
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string,
  contact: PropTypes.string,
  contactOnline: PropTypes.bool,
};

Avatar.defaultProps = {
  size: 'medium',
  contactOnline: false,
};

export default Avatar;
