import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadContacts } from '../../redux/ducks/contacts';
import { AiOutlineSearch } from 'react-icons/all';
import Contact from './Contact';
import SkeletonLoader from './SkeletonLoader';
import SearchContacts from './SearchContacts';
import style from './style.module.css';

function Chats() {
  const contacts = useSelector((state) => state.contacts.items);
  const loader = useSelector((state) => state.contacts.loading);
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.fullname?.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={style.chats}>
      <SearchContacts filter={filter} />
      {loader ? (
        <SkeletonLoader />
      ) : (
        filteredContacts.map((contact, index) => {
          return <Contact contact={contact} key={index} />;
        })
      )}
    </div>
  );
}

export default Chats;
