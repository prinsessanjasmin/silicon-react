import React from 'react'

function Subscribe() {
  return (
    <section aria-label="Subscription offer" id="subscribe-section">
        <div className="container" id="subscribe-container">
            <div id="bell-sub">
                <div className="image-container" id="bell-container">
                    <img src="src/assets/Icons/bell.svg" alt="Notification bell icon."></img>
                </div>
                    <h4 id="subscribe-text">Subscribe to our newsletter<span> to stay informed about our latest updates</span></h4>
            </div>
            <div id="input-div">
                <input id="email-input" type="email" placeholder="  &#9993;  Your email" ></input>
                <button className="button" id="sub-btn">Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Subscribe