import React from 'react';
import style from '../style.module.css';
import { MdClear } from 'react-icons/all';
import { setFilterMessages } from '../../../redux/ducks/messages';
import { useDispatch } from 'react-redux';

function ClearSearchMessages({ filter }) {
  const dispatch = useDispatch();

  const clearSearchMessages = () => {
    dispatch(setFilterMessages(''));
  };

  return (
    <div className={style.clear}>
      <span onClick={clearSearchMessages}>
        {filter ? <MdClear className={style.clearSerch} /> : ''}
      </span>
    </div>
  );
}

export default ClearSearchMessages;
