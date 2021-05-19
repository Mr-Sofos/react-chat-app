import React from 'react';
import PropTypes from 'prop-types';
import style from '../style.module.css';
import { MdClear } from 'react-icons/all';
import { setFilterMessages } from '../../../redux/ducks/messages';
import { useDispatch } from 'react-redux';
import { useHotkeys } from 'react-hotkeys-hook';

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
        {filter ? <MdClear className={style.clearSerch} /> : ''}
      </span>
    </div>
  );
}

ClearSearchMessages.propTypes = {
  filter: PropTypes.string,
};

export default ClearSearchMessages;
