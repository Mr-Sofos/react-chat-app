import { MdAutorenew } from 'react-icons/all';
import style from '../style.module.css';

function PreloaderNameAndOnlineMessages() {
  return (
    <div className={style.wrapLoaderAndText}>
      <div className={style.preloaderHeader}>
        <MdAutorenew className={style.autorenewPreloaderHeader} />
      </div>
      <div className={style.headLoaderText}>Загрузка чата</div>
    </div>
  );
}

export default PreloaderNameAndOnlineMessages;
