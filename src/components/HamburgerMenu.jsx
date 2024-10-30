import React, { useState } from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

function HamburgerMenu() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  

  return (
    <li className="nav-list-item" id="hamburger-li">
        <button onClick={ handleClick } className="hamburger-menu" aria-label="click for full menu" >
            <i className="fa-solid fa-bars"></i>
        </button>
        {open ? 
          <div className="hamburger-expanded">
            <ul className="dropdown-list">
              <li className="dropdown-item">
                    <Link to="/home" id="">Home</Link>
              </li>
              <li className="dropdown-item">
                  <Link to="/features" id="">Features</Link>
              </li>
              <li className="dropdown-item">
                  <Link to="/contact" id="">Contact</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/signin">
                  <span>Sign in / up</span>
                </Link> 
              </li>
            </ul>
        </div>
        : <></>}
    </li>
  )
}

export default HamburgerMenu