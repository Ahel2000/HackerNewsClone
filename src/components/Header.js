import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css'

const Header = () => {
  return (
    <>
      <div className='hn-header'>
        <h1 className='hackernews-title'>HackerNews</h1>
        <h5 color='#86ad87'>#1 trusted cybersecurity platform</h5>
      </div>

      <div className="nav-link">
        <NavLink to="/top" activeClassName="active" className='nav-item'>
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active" className='nav-item'>
          Latest Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active" className='nav-item'>
          Best Stories
        </NavLink>
      </div>
    </>
  );
};

export default Header;
