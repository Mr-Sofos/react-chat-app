import { BsCheck, BsCheckAll } from 'react-icons/all';
import PropTypes from 'prop-types';

const IsRead = ({ isRead }) => (isRead ? <BsCheckAll /> : <BsCheck />);

IsRead.propTypes = {
  isRead: PropTypes.bool,
};

export default IsRead;
