import React from 'react'

function Page1Hero() {
  return (
    <section id="page-1" aria-label="Showcase">
        <div className="container" id="p-1">
            <h1 id="headline">Manage All Your Money in One App</h1>
            <p id="teaser">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <a href="https://www.apple.com/app-store/" target="_blank" type="button" className="download-button" id="apple">
                <img className="btn-pic" id="apple-pic" src="src\components\Icons\apple-light.svg" alt="Link to download app via App Store."></img>   
                <img className="btn-pic btn-pic-dark" id="apple-pic-dark" src="src\components\Icons\apple-dark.svg" alt="Link to download app via App Store."></img>
                <div className="sr-only">Click the link to download on the App Store.</div>
            </a>
            <a href="https://play.google.com/store/" target="_blank" type="button" className="download-button" id="google">
                <img className="btn-pic" id="google-pic" src="src\components\Icons\google-light.svg" alt="Link to download app via Google Play."></img>
                <img className="btn-pic btn-pic-dark" id="google-pic-dark" src="src\components\Icons\google-dark.svg" alt="Link to download app via Google Play."></img>
                <div className="sr-only">Click the link to get it on Google Play.</div>
            </a>
            <div id="discover">
                <a href="#page-2" className="down-btn" type="button"></a>
                <span id="discover-more">Discover more</span>
                <div className="sr-only">Click to go straight to App features!</div>
            </div>
            <div className="image-container" id="img-co-1">
                <img id="ip-1" src="src\components\Images\iPhone1.svg" loading="lazy"></img>
            </div>
        </div>
    </section>
  )
}

export default Page1Hero