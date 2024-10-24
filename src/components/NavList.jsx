import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'
import HamburgerMenu from './HamburgerMenu'

function NavList() {
  return (
    <ul className="nav-list">
        <li className="nav-list-item nav-link" id="feature-menu-li">
            <a href="#" id="feature-menu">Features</a>
        </li>
        <li className="nav-list-item nav-link" id="contact-li">
            <a href="/contact.html" id="contact">Contact</a>
        </li>
        <DarkmodeSwitch />
        <li className="nav-list-item" id="signin-btn-li">
            <a href="#" className="button" id="signin-button">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a> 
        </li>
        <HamburgerMenu />
    </ul>
  )
}

export default NavList