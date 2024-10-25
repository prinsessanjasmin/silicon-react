import React from 'react'

function PhoneCarousel() {
  return (
    <div id="three-displays">
        <div className="image-container" id="phone-container-left">
            <img className="displays-tablet" id="phone-left" loading="lazy" src="src/assets/Images/crop-cards.png" alt="Screen overview of the cards registered in your Silicon App"></img>
            <img className="displays-dt" id="phone-left-dt" loading="lazy" src="src/assets/Images/iPhone 12 Pro1.png" alt="Screen showing an economic flowchart."></img>
        </div>
        <div className="image-container" id="phone-container-middle">
            <img id="iphone-3" loading="lazy" src="src/assets/Images/iPhone3.svg" alt=""></img>
            <img id="phone-middle" loading="lazy" src="src/assets/Images/screen-modified.svg" alt="Screen showing options of contacts to transfer money to."></img>
            <img className="displays-dt" loading="lazy" id="phone-left" src="src/assets/Images/crop-cards.png" alt="Screen overview of the cards registered in your Silicon App"></img>
        </div>
        <div className="image-container" id="phone-container-right">
            <img className="displays-tablet" loading="lazy" id="phone-right" src="src/assets/Images/crop-transfer.png" alt="Screen showing the user interface when transferring money with the Silicon App."></img>
            <img className="displays-dt" loading="lazy" id="phone-right-dt" src="src/assets/Images/iPhone 12 Pro2.svg" alt="Screen showing the user interface when transferring money with the Silicon App."></img>
        </div>
    </div>
  )
}

export default PhoneCarousel