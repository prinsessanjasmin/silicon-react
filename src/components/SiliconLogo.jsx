import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function SiliconLogo() {
  return (
    <Link preventScrollReset={true} className="logo-link" id="silicon-logo" to="/" >
      <img src='/src/assets/Logos/Silicon.svg' alt="Silicon logotype"></img>
      <h5>Silicon</h5>
    </Link>
  )
}

export default SiliconLogo