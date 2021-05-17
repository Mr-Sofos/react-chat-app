import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { loadMyId } from '../../redux/ducks/application';
import Chats from '../Chats';
import Messages from '../Messages';
import MyProfile from '../MyProfile';
import style from './../App/style.module.css';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.application.loading);

  useEffect(() => {
    dispatch(loadMyId());
  }, [dispatch]);

  return (
    !loading && (
      <div className={style.appWrapper}>
        <BrowserRouter>
          <Route path="/:_id?">
            <Chats />
            <Messages />
            <MyProfile />
          </Route>
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
