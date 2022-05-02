import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <img 
      src = {Logo} 
      alt = 'LogoHenry'
      className='logo-henry' />
      <h3 className='titulo-SB'>Henry - Weather APP</h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
