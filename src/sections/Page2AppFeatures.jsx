import React from 'react'
import AppFeatureList from '../components/AppFeatureList'

function Page2AppFeatures() {
  return (
    <section aria-label="App features" id="page-2">
            <div className="content-box container" id="p-2">
                <div className="image-container" id="side-view">
                    <img src="src/assets/Images/side-phone.svg" id="side-phone" alt="An iPhone displaying the Silicon App." loading="lazy"></img>
                </div>
                <div id="text-content">
                    <div className="textpage">
                        <h2 id="app-features">App Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at lacus.</p>
                    </div>
                    <AppFeatureList />
                </div>
            </div>
        </section>
  )
}

export default Page2AppFeatures