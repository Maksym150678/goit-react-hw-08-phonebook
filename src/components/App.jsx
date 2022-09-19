import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent } from 'redux/auth/authOperation';

import Header from './Phonebook/Header/Header';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
    </div>
  );
}
export default App;