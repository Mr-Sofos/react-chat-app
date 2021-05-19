import PropTypes from 'prop-types';
import style from './style.module.css';

function InfoBox({ content }) {
  return <div className={style.infoBox}>{content}</div>;
}

InfoBox.propTypes = {
  content: PropTypes.string,
};

export default InfoBox;
