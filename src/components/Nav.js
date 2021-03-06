import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' to='/todo'>
          Todo
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
