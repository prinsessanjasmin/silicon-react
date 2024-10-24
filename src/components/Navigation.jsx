import React from 'react'

function Navigation() {
  return (
    <nav aria-label="main-navigation" className="main-navigation">
        <div className="header-container container">
            <div id="silicon-logo">
                <a id="s-logo" href="index.html">
                    <img src='\src\components\Logos\Silicon.svg' alt="Silicon logotype"></img>
                </a>
                <a id="s-text" href="index.html">
                    <h5>Silicon</h5>
                </a>
            </div>
            <ul className="nav-list">
                <li className="nav-list-item nav-link" id="feature-menu-li">
                    <a href="#" id="feature-menu">Features</a>
                </li>
                <li className="nav-list-item nav-link" id="contact-li">
                    <a href="/contact.html" id="contact">Contact</a>
                </li>
                <li className="nav-list-item" id="toggle-switch-li">
                    <div className="toggle-switch-button">
                        <span className="toggle-switch-label">Dark Mode</span>
                        <label className="switch">
                            <input type="checkbox" id="dm-switch" aria-label="darkmode switch"></input>
                            <span className="slider round"></span>
                        </label> 
                        {/* <!-- ovan kopierat från w3schools --> */}
                    </div>
                </li>
                <li className="nav-list-item" id="signin-btn-li">
                    <a href="#" className="button" id="signin-button">
                        <i className="fa-regular fa-user"></i>
                        <span>Sign in / up</span>
                    </a> 
                </li>
                <li className="nav-list-item" id="hamburger-li">
                    <button className="hamburger-menu" aria-label="click for full menu" >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation