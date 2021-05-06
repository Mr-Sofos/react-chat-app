import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadProfileInfo } from '../../../redux/ducks/application';
import { FaCircle } from 'react-icons/all';
import style from '../style.module.css';
import { useDispatch, useSelector } from 'react-redux';

function MessagesHeaderName(props) {
  const dispatch = useDispatch();
  const openProfileName = useParams()._id;

  useEffect(() => {
    dispatch(loadProfileInfo());
  }, [dispatch, openProfileName]);

  const NameHeaderContact = useSelector((state) =>
    state.contacts.items.find((item) => {
      return openProfileName === item._id;
    }),
  );

  return (
    <div className={style.headerNameAndOnline}>
      <div className={style.headerName}>{NameHeaderContact?.fullname}</div>
      <div>
        {' '}
        {NameHeaderContact?.online ? (
          <FaCircle className={style.messagesHeaderOnline} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default MessagesHeaderName;
