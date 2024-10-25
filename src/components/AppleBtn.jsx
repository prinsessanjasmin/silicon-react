import React from 'react'

function AppleBtn() {
  return (
    <a href="https://www.apple.com/app-store/" target="_blank" type="button" className="download-button" id="apple">
        <img className="btn-pic" id="apple-pic" src="src/assets/Icons/apple-light.svg" alt="Link to download app via App Store."></img>   
        <img className="btn-pic btn-pic-dark" id="apple-pic-dark" src="src/assets/Icons/apple-dark.svg" alt="Link to download app via App Store."></img>
        <div className="sr-only">Click the link to download on the App Store.</div>
    </a>
  )
}

export default AppleBtn