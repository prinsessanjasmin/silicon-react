import React from 'react'
import AppleBtn from '../components/AppleBtn'
import GoogleBtn from '../components/GoogleBtn'

function Page1Hero() {
  return (
    <section id="page-1" aria-label="Showcase">
        <div className="container" id="p-1">
            <h1 id="headline">Manage All Your Money in One App</h1>
            <p id="teaser">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <AppleBtn />
            <GoogleBtn />
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