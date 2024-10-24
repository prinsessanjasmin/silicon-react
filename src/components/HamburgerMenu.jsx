import React from 'react'

function HamburgerMenu() {
  return (
    <li className="nav-list-item" id="hamburger-li">
        <button className="hamburger-menu" aria-label="click for full menu" >
            <i className="fa-solid fa-bars"></i>
        </button>
    </li>
  )
}

export default HamburgerMenu