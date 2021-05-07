import { AiOutlineSearch } from 'react-icons/all';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { loadContacts, setFilterText } from '../../redux/ducks/contacts';
import Contact from './contact';
import SkeletonLoader from './skeletonLoader';

function Chats() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const loader = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.fullname?.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleSearch = (e) => {
    dispatch(setFilterText(e.target.value));
  };

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
          <input
            type="text"
            placeholder="Search contact"
            value={filter}
            onChange={handleSearch}
          />
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
