import React from 'react'
import SiliconLogo from './SiliconLogo'
import NavList from './NavList'

function Navigation() {
  return (
    <nav aria-label="main-navigation" className="main-navigation">
        <div className="header-container container">
            <SiliconLogo />
            <NavList />
        </div>
    </nav>
  )
}

export default Navigation