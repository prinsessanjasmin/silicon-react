import React from 'react'

function ContactUs() {
  return (
    <div className="contact-us">
        <h1>Contact Us</h1>
        <div className="contact-info-div" id="contact-info">
            <div className="contact-option">
                <div className="icon-holder">
                    <img src="src\components\Icons\envelope.svg" alt="Envelope icon"></img>
                </div>
                <div className="contact-group">
                    <h4>Email us</h4>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                    <a href="#" type="button" aria-label="Click to send us an email">Leave a message &rarr;</a>
                </div>
            </div>
            <div className="contact-option">
                <div className="icon-holder">
                    <img src="src\components\Icons\add-group.svg" alt="Icon of people connecting"></img>
                </div>
                <div className="contact-group">
                    <h4>Careers</h4>
                    <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    <a href="#" type="button" aria-label="Click to send us an application">Send an application &rarr;</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs