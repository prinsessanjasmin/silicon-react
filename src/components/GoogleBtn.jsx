import React from 'react'

function GoogleBtn() {
  return (
    <a href="https://play.google.com/store/" target="_blank" type="button" className="download-button" id="google">
        <img className="btn-pic" id="google-pic" src="src/assets/Icons/google-light.svg" alt="Link to download app via Google Play."></img>
        <img className="btn-pic btn-pic-dark" id="google-pic-dark" src="src/assets/Icons/google-dark.svg" alt="Link to download app via Google Play."></img>
        <div className="sr-only">Click the link to get it on Google Play.</div>
    </a>
  )
}

export default GoogleBtn