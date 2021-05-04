import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadContacts } from '../../../redux/ducks/contacts';

function Avatar(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  return (
    <div>
      <img src={props.avatars.picture} alt="img" />
    </div>
  );
}

export default Avatar;
