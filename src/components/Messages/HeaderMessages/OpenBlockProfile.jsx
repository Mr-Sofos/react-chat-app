import { useDispatch } from 'react-redux';
import { profileContactOpen } from '../../../redux/ducks/application';
import { useHotkeys } from 'react-hotkeys-hook';
import { IoSettingsSharp } from 'react-icons/all';
import style from '../style.module.css';

function OpenBlockProfile() {
  const dispatch = useDispatch();

  const handleClickProfile = () => {
    dispatch(profileContactOpen());
  };

  useHotkeys('shift+p', () => {
    dispatch(profileContactOpen());
  });

  return (
    <div className={style.settingsHeaderMessages}>
      <IoSettingsSharp
        className={style.openProfile}
        onClick={handleClickProfile}
      />
    </div>
  );
}

export default OpenBlockProfile;
