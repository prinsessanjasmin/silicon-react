import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'
import HamburgerMenu from './HamburgerMenu'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

function NavList() {
  return (
    <ul className="nav-list">
        <li className="nav-list-item nav-link" id="feature-menu-li">
            <NavLink to="/features" id="feature-menu">Features</NavLink>
        </li>
        <li className="nav-list-item nav-link" id="contact-li">
            <NavLink to="/contact" id="contact">Contact</NavLink>
        </li>
        <DarkmodeSwitch />
        <li className="nav-list-item" id="signin-btn-li">
            <Link to="/signin" className="button" id="signin-button">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </Link> 
        </li>
        <HamburgerMenu />
    </ul>
  )
}

export default NavList