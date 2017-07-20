import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <h1 className='logo'>The Comic Connect</h1>
      </div>
      <nav>
        <NavLink className='nav-link'
                 to='/'>Home
        </NavLink>
        <NavLink className='nav-link'
                 to='/saved-comics'>Saved Comics
        </NavLink>
        <NavLink to='/login'>
                 <button className='header-button'>Login</button>
        </NavLink>
        <NavLink to='/signup'>
                 <button className='header-button'>Signup</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
