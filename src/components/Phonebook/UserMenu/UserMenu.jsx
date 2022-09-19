import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/authSelector';
import { logout } from 'redux/auth/authOperation';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  const { email } = useSelector(getUser);
  return (
    <div>
      <span className={styles.userName}>{email}</span>
      <button onClick={onLogout} className={styles.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;