import Profile from './Profile';
import Social from './Social';
import Media from './Media';
import style from './style.module.css';

function MyProfile() {
  return (
    <div className={style.myProfile}>
      <div className={style.childProfile}>
        <Profile />
        <Social />
        <Media />
      </div>
    </div>
  );
}

export default MyProfile;
