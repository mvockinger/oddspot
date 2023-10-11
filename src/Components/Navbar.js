import React, { useState } from 'react';

const Navbar = () => {
  
  return <nav className='navbar-container'>
    <div className='nav-logo-container'>
      <button className='home-button'></button>
    </div>
    <div className='navbar-items-container'>
      <a className='navbar-a'>Community <i class="fa-solid fa-users"></i></a>
      <a className='navbar-a'>Daily Picks <i class="fa-regular fa-calendar-check"></i></a>
      <a className='navbar-a'>Predictions <i class="fa-solid fa-bullseye"></i></a>
      <a className='navbar-a'>Statistics <i class="fa-solid fa-chart-column"></i></a>
      <a className='navbar-a'>Pricing <i class="fa-solid fa-tag"></i></a>
    </div>
    <div className='navbar-login-container'>
    <button className='login-button'><i class="fa-solid fa-user-tie"></i> Login </button>
    </div>
  </nav>;

}

export default Navbar