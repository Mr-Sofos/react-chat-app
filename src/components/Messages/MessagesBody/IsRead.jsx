import { BsCheck, BsCheckAll } from 'react-icons/all';

const IsRead = ({ isRead }) => (isRead ? <BsCheckAll /> : <BsCheck />);

export default IsRead;
