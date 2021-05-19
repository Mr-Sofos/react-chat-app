import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../../redux/ducks/contacts';
import { useHotkeys } from 'react-hotkeys-hook';
import { MdClear } from 'react-icons/all';
import style from './style.module.css';

function SearchContacts() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleDeleteText = () => {
    dispatch(setFilterText(''));
  };

  const handleSearch = (e) => {
    dispatch(setFilterText(e.target.value));
  };

  useHotkeys('shift+t', () => {
    dispatch(setFilterText(''));
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search contact"
        onChange={handleSearch}
        value={filter}
      />
      <div className={style.deleteSearch} onClick={handleDeleteText}>
        {filter ? <MdClear /> : ''}
      </div>
    </>
  );
}

export default SearchContacts;
