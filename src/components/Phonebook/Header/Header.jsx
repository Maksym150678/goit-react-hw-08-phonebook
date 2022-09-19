import { Route, Routes, NavLink } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import useAuth from 'shared/hooks/useAuth';

import UserMenu from 'components/Phonebook/UserMenu/UserMenu';

import PrivateRoute from 'components/Phonebook/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/Phonebook/PublicRoute/PublicRoute';

import style from './Header.module.css';

const Home = lazy(() => import('../Home/Home'));
const NotFound = lazy(() => import('../NotFound/NotFound'));
const RegisterPage = lazy(() => import('../../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../../pages/ContactsPage/ContactsPage'));

const getClassName = ({ isActive }) => {
  return isActive ? `${style.active} ${style.headerNav}` : style.headerNav;
};

const Header = () => {
  const isLogin = useAuth();
  // console.log(isAuth);
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <div className="navifation">
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
            {isLogin && (
              <NavLink to="/contacts" className={getClassName}>
                Contacts
              </NavLink>
            )}
          </div>
          {!isLogin ? (
            <div className={style.register}>
              <NavLink to="/login" className={getClassName}>
                Login
              </NavLink>
              <NavLink to="/register" className={getClassName}>
                Register
              </NavLink>
            </div>
          ) : (
            <UserMenu />
          )}
        </nav>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Header;