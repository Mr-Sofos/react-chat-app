import { AiOutlineSearch } from 'react-icons/all';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadContacts } from '../../redux/ducks/contacts';
import Contact from './contact';

function Chats() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={style.chats}>
      <div className={style.search}>
        <div className="icon">
          <AiOutlineSearch />
        </div>
        <input type="text" placeholder="Search contact" />
      </div>
      <div>
        {contacts.map((contact) => {
          return <Contact contact={contact} key={contact._id} />;
        })}
      </div>
    </div>
  );
}

export default Chats;
