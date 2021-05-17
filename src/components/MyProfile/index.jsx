import { useParams } from 'react-router-dom';
import Profile from './Profile';

function MyProfile() {
  const openProfileInfo = useParams()._id;

  return <Profile openProfileInfo={openProfileInfo} />;
}

export default MyProfile;
