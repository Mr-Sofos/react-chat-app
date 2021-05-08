import { AiOutlineSearch } from 'react-icons/all';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { loadContacts } from '../../redux/ducks/contacts';
import Contact from './contact';
import SkeletonLoader from './skeletonLoader';
import SearchContacts from './searchContacts';

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
      <div className={style.inputBlock}>
        <div className={style.search}>
          <div className="icon">
            <AiOutlineSearch />
          </div>
          <SearchContacts contacts={contacts} />
        </div>
      </div>

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
