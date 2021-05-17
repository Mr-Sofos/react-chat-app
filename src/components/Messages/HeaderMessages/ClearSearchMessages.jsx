import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilterMessages } from '../../../redux/ducks/messages';
import { useHotkeys } from 'react-hotkeys-hook';
import { MdClear } from 'react-icons/all';
import style from '../style.module.css';

function ClearSearchMessages({ filter }) {
  const dispatch = useDispatch();

  const clearSearchMessages = () => {
    dispatch(setFilterMessages(''));
  };

  useHotkeys('shift+x', () => {
    dispatch(setFilterMessages(''));
  });

  return (
    <div className={style.clear}>
      <span onClick={clearSearchMessages}>
        {filter ? <MdClear className={style.clearSearch} /> : ''}
      </span>
    </div>
  );
}

ClearSearchMessages.propTypes = {
  filter: PropTypes.string,
};

export default ClearSearchMessages;
