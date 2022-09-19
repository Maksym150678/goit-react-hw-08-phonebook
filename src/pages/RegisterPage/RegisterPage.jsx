import RegisterForm from 'components/Phonebook/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/authOperation';

import { Navigate } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSignUp = data => {
    dispatch(signup(data));
  };
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <RegisterForm onSubmit={onSignUp} />
    </div>
  );
};

export default RegisterPage;