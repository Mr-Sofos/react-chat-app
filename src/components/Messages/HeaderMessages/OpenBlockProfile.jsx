import React from 'react';
import style from '../style.module.css';
import { IoSettingsSharp } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { profileContactOpen } from '../../../redux/ducks/application';

function OpenBlockProfile(props) {
  const dispatch = useDispatch();

  const handleClickProfile = () => {
    dispatch(profileContactOpen());
  };

  return (
    <div className={style.settingsHeaderMessages}>
      <span onClick={handleClickProfile}>
        <IoSettingsSharp className={style.openProfile} />
      </span>
    </div>
  );
}

export default OpenBlockProfile;
