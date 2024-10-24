import React from 'react'

function Page3HowDoesItWork() {
  return (
    <section aria-label="How does it work?" id="page-3">
        <div className="content-box container" id="p-3">
            <div className="text-item">
                <h2>How Does It Work?</h2>
            </div>
            <div id="three-displays">
                <div className="image-container" id="phone-container-left">
                    <img className="displays-tablet" id="phone-left" loading="lazy" src="src\components\Images\crop-cards.png" alt="Screen overview of the cards registered in your Silicon App"></img>
                    <img className="displays-dt" id="phone-left-dt" loading="lazy" src="src\components\Images\iPhone 12 Pro1.png" alt="Screen showing an economic flowchart."></img>
                </div>
                <div className="image-container" id="phone-container-middle">
                    <img id="iphone-3" loading="lazy" src="src\components\Images\iPhone3.svg" alt=""></img>
                    <img id="phone-middle" loading="lazy" src="src\components\Images\screen-modified.svg" alt="Screen showing options of contacts to transfer money to."></img>
                    <img className="displays-dt" loading="lazy" id="phone-left" src="src\components\Images\crop-cards.png" alt="Screen overview of the cards registered in your Silicon App"></img>
                </div>
                <div className="image-container" id="phone-container-right">
                    <img className="displays-tablet" loading="lazy" id="phone-right" src="src\components\Images\crop-transfer.png" alt="Screen showing the user interface when transferring money with the Silicon App."></img>
                    <img className="displays-dt" loading="lazy" id="phone-right-dt" src="src\components\Images\iPhone 12 Pro2.svg" alt="Screen showing the user interface when transferring money with the Silicon App."></img>
                </div>
        </div>
            <div className="text-item" id="transfers">
                <h4 id="transfer-tablet">
                    <span id="step-3">Step 3. </span>Transfers to people from your contact list
                </h4> 
                <h4 id="transfer-desktop">Latest transaction history</h4>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
        </div>
    </section>
  )
}

export default Page3HowDoesItWork