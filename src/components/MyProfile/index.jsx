import Profile from './Profile';
import style from './style.module.css';
import { Route } from 'react-router-dom';

function MyProfile() {
  return (
    <div className={style.myProfile}>
      <Route path="/:_id?">
        <Profile />
      </Route>
    </div>
  );
}

export default MyProfile;
