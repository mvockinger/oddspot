import React, { useState } from 'react';

const Navbar = () => {
  
  return <nav className='navbar-container'>
    <div className='nav-logo-container'>
      <button className='home-button'></button>
    </div>
    <div className='navbar-items-container'>
    <a className='navbar-a'><i class="fa-solid fa-book"></i> Blog </a>
      <a className='navbar-a'><i class="fa-regular fa-calendar-check"></i> Daily Picks </a>
      <a className='navbar-a'><i class="fa-solid fa-chart-column"></i> Statistics </a>
      <a className='navbar-a'><i class="fa-solid fa-tag"></i> Pricing </a>
    </div>
    <div className='navbar-login-container'>
    <button className='login-button'><i class="fa-solid fa-user-tie"></i> Login </button>
    </div>
  </nav>;

}

export default Navbar