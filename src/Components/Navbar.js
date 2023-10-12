import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isClickInside, setClickInside] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
    setClickInside(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
      setClickInside(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return <nav className='navbar-container'>
    <div className='nav-logo-container'>
      <button className='home-button'></button>
    </div>
    <div className='navbar-items-container'>
      <a className='navbar-item'>upcoming events <i class="fa-regular fa-calendar"></i></a>
      <a className='navbar-item'>free picks <i class="fa-regular fa-circle-check"></i></a>
      <a className='navbar-item'>predictions <i class="fa-solid fa-bullseye"></i></a>
      <a className='navbar-item'>statistics <i class="fa-solid fa-chart-column"></i></a>
      <a className='navbar-item'>community <i class="fa-solid fa-users"></i></a>
      <div
        className={`dropdown ${isDropdownVisible || isClickInside ? 'active' : ''}`}
        onClick={handleDropdownToggle}
        ref={dropdownRef}
      >
        <a href="#" className="navbar-item">sport <FontAwesomeIcon icon={isDropdownVisible ? faCaretUp : faCaretDown} className="arrow-icon" /></a>
        {isDropdownVisible && (
          <div className="dropdown-content">
            <a href="#"><i class="fa-regular fa-futbol"></i> football</a>
            <a href="#"><i class="fa-solid fa-basketball"></i> basketball</a>
            <a href="#"><i class="fa-solid fa-baseball"></i> tennis</a>
            <a href="#"><i class="fa-solid fa-hockey-puck"></i> ice hockey</a>
            <a href="#"><i class="fa-solid fa-volleyball"></i> volleyball</a>
            <a href="#"><i class="fa-solid fa-football"></i> american football</a>
          </div>
        )}
      </div>
      <a className='navbar-item'>pricing <i class="fa-solid fa-tag"></i></a>
    </div>
    <div className='navbar-login-container'>
    <button className='login-button'><i class="fa-solid fa-user-tie"></i> Login </button>
    </div>
  </nav>;

}

export default Navbar