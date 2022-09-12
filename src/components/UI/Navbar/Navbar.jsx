import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className='navbar'>
      <MyButton style={{ width: '100px', height: '30px', order: '2' }} onClick={logout}>
        Log Out
      </MyButton>
      <div className="navbar__item">
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  );
}

export default Navbar;