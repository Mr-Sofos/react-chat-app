import Chats from '../Chats';
import Messages from '../Messages';
import MyProfile from '../MyProfile';
import style from './../App/style.module.css';

function App() {
  return (
    <div className={style.appWrapper}>
      <Chats />
      <Messages />
      <MyProfile />
    </div>
  );
}

export default App;
