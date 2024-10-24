import React from 'react'

function Contact1() {
  return (
    <section id="contact-page-1" aria-label="contact-page">
                <div className="container" id="p-contact-1">
                    <div className="page-nav">
                        <a href="/index.html">
                            <span>
                                <i className="fa-solid fa-house"></i>
                            </span>
                            <span>Homepage</span>
                        </a>
                        <span><i className="fa-solid fa-angles-right"></i></span>
                        <a className="active" href="/contact.html">
                            <span>Contact</span>
                        </a>
                    </div>
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
                    <div className="consultation-card" id="consultation-card">
                        <h3>Get Online Consultation</h3>
                        <form className="contact-form">
                            <div className="input-group">
                                <label for="full-name">Full name</label>
                                <input type="text" id="full-name"></input>
                            </div>
                            <div className="input-group">
                                <label for="email-adress">Email adress</label>
                                <input type="text" id="email-adress"></input>
                            </div>
                            <div className="input-group">
                                <label for="specialist">Specialist</label>
                                <select id="specialist">
                                    <option value="">Select a speciality...</option>
                                    <option value="accounting">Accounting</option>
                                    <option value="web-programming">Web programming</option>
                                    <option value="back-end">Back-end</option>
                                    <option value="web-design">Web design</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <button className="button" type="submit">Make an appointment</button>
                        </form>
                    </div>
                </div> 
            </section>
  )
}

export default Contact1