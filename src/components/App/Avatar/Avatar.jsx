import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/all';
import style from './style.module.css';

function Avatar({ size, fullname, online }) {

  return (
    <div className={style.imageBlock}>
      <div className={style[size]}>
        {fullname?.fullname[0]}
        {online ? <FaCircle className={style.online} /> : ''}
      </div>
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

Avatar.defaultProps = {
  size: 'medium',
  online: false,
};

export default Avatar;
