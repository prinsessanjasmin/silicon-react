import React, { useState } from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import DropdownMenu from './DropdownMenu';

function HamburgerMenu() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  } 

  return (
    <>
      <li className="nav-list-item" id="hamburger-li">
        <DropdownMenu 
          buttonClassName='hamburger-menu'
          trigger={<i className="fa-solid fa-bars"></i>}
          openClasses='canExpand open'
          closedClasses='canExpand'
          id='hamburger-expanded'
          options={[
            <NavLink to="/" className='burger-item' id="">Home</NavLink>,
            <NavLink to="/features" className='burger-item' id="">Features</NavLink>,
            <NavLink to="/contact" className='burger-item' id="">Contact</NavLink>,
            <NavLink to="/register" className='burger-item' >Sign in / up</NavLink>
          ]}
          onSelect={handleClick}
        />
      </li>
    </>
        
    // <li className="nav-list-item" id="hamburger-li">
    //   <div className='dropdown-wrapper'>
    //     <button onClick={ handleClick } className="hamburger-menu" aria-label="click for full menu" >
    //         <i className="fa-solid fa-bars"></i>
    //     </button>
    //       <div className={open ? "hamburger-expanded open" : "hamburger-expanded"} id="hamburger-expanded">
    //         <ul className="dropdown-list">
    //           <li className="dropdown-item">
    //                 <NavLink to="/" onClick={ handleClick } id="">Home</NavLink>
    //           </li>
    //           <li className="dropdown-item">
    //               <NavLink to="/features" onClick={ handleClick } id="">Features</NavLink>
    //           </li>
    //           <li className="dropdown-item">
    //               <NavLink to="/contact" onClick={ handleClick } id="">Contact</NavLink>
    //           </li>
    //           <li className="dropdown-item">
    //             <NavLink to="/signin" onClick={ handleClick } >Sign in / up</NavLink> 
    //           </li>
    //         </ul>
    //       </div>
    //   </div>
    // </li>
  )
}

export default HamburgerMenu

