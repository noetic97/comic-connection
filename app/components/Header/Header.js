import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>The Comic Connect</h1>
      <nav>
        <NavLink className='nav-link'
                 to='/'>Home</NavLink>
        <NavLink className='nav-link'
                 to='/saved-comics'>Saved Comics</NavLink>
        <NavLink className='nav-button'
                 to='/login'>
                 <button>Login</button>
        </NavLink>
        {/* <NavLink className='nav-button'
                 to='/signup'>
                 <button>Signup</button>
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Header;
