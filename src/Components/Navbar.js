import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownVisibleSport, setDropdownVisibleSport] = useState(false);
  const [isDropdownVisibleCommunity, setDropdownVisibleCommunity] = useState(false);
  const [isClickInside, setClickInside] = useState(false);
  const dropdownRefSport = useRef(null);
  const dropdownRefCommunity = useRef(null);

  const handleDropdownToggleSport = () => {
    setDropdownVisibleSport(!isDropdownVisibleSport);
    setDropdownVisibleCommunity(false);
    setClickInside(true);
  };

  const handleDropdownToggleCommunity = () => {
    setDropdownVisibleCommunity(!isDropdownVisibleCommunity);
    setDropdownVisibleSport(false);
    setClickInside(true);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefSport.current &&
      !dropdownRefSport.current.contains(event.target) &&
      dropdownRefCommunity.current &&
      !dropdownRefCommunity.current.contains(event.target)
    ) {
      setDropdownVisibleSport(false);
      setDropdownVisibleCommunity(false);
      setClickInside(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar-container'>
      <div className='nav-logo-container'>
        <button className='home-button'></button>
      </div>
      <div className='navbar-items-container'>
        <a className='navbar-item'>
          <i className="fa-brands fa-get-pocket"></i>free picks
        </a>
        <a className='navbar-item'>
          <i className="fa-regular fa-calendar"></i>upcoming
        </a>
        <a className='navbar-item'>
          <i className="fa-solid fa-chart-column"></i>stats
        </a>
        <div
          className={`dropdown ${isDropdownVisibleSport || isClickInside ? 'active' : ''}`}
          onClick={handleDropdownToggleSport}
          ref={dropdownRefSport}
        >
          <a href="#" className="navbar-item">
            <i className="fa-solid fa-bullseye"></i> sport{' '}
            <FontAwesomeIcon icon={isDropdownVisibleSport ? faCaretUp : faCaretDown} className="arrow-icon" />
          </a>
          {isDropdownVisibleSport && (
            <div className="dropdown-content">
              {
                <div className="dropdown-content">
                  <a href="#"><i className="fa-regular fa-futbol"></i>football</a>
                  <a href="#"><i className="fa-solid fa-basketball"></i>basketball</a>
                  <a href="#"><i className="fa-solid fa-baseball"></i>tennis</a>
                  <a href="#"><i className="fa-solid fa-football"></i>american football</a>
                  <a href="#"><i className="fa-solid fa-hockey-puck"></i>ice hockey</a>
                  <a href="#"><i className="fa-solid fa-volleyball"></i>volleyball</a>
                  <a href="#"><i className="fa-solid fa-baseball-bat-ball"></i>baseball</a>
                </div>
              }
            </div>
          )}
        </div>
        <div
          className={`dropdown ${isDropdownVisibleCommunity || isClickInside ? 'active' : ''}`}
          onClick={handleDropdownToggleCommunity}
          ref={dropdownRefCommunity}
        >
          <a href="#" className="navbar-item">
            <i className="fa-regular fa-comments"></i>community{' '}
            <FontAwesomeIcon icon={isDropdownVisibleCommunity ? faCaretUp : faCaretDown} className="arrow-icon" />
          </a>
          {isDropdownVisibleCommunity && (
            <div className="dropdown-content">
              {
                <div className="dropdown-content">
                  <a href="#"><i class="fa-solid fa-globe"></i>forum</a>
                  <a href="#"><i class="fa-solid fa-comment-dots"></i>community picks</a>
                  <a href="#"><i class="fa-solid fa-chess"></i>strategies</a>
                </div>
              }
            </div>
          )}
        </div>
      </div>
      <div className='navbar-login-container'>
        <button className='navbar-button sign-up-button'>Sign up</button>
        <button className='navbar-button login-button'>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
