import Chats from '../Chats';
import Messages from '../Messages';
import MyProfile from '../MyProfile';
import style from './../App/style.module.css';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <div className={style.appWrapper}>
      <BrowserRouter>
        <Chats />
        <Messages />
        <MyProfile />
      </BrowserRouter>
    </div>
  );
}

export default App;
