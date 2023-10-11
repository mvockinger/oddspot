import React, { useState } from 'react';
import Logo from '../logos/oddspot_full.png';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  
  const [openMenu,setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon/>
    },
    {
      text: "About",
      icon: <InfoIcon/>
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon/>
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon/>
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon/>
    },

  ]
  
  return <nav>
    <div className='nav-logo-container'>
      <button className='home-button'></button>
    </div>
    <div className='navbar-links-container'>
      <a href="">Daily Picks</a>
      <a href="">Blog</a>
      <a href="">Pricing</a>
      <a href=""></a>
      <button className='primary-button'>Login</button>
    </div>
    <div className='navbar-menu-container'>
      <HiOutlineBars3 onClick={() => setOpenMenu(true) }/>
    </div>
  </nav>;

  
}

export default Navbar