import React from 'react'

function Contact2() {
  return (
    <section id="contact-page-2" aria-label="contact-page-with-map">
                <div className="container" id="p-contact-2">
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12621.335361536538!2d-122.40866839022975!3d37.73531158510237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1729170961143!5m2!1sen!2sse" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="location-box">
                        <div className="location" id="location-1">
                            <h4>Medical Center 1</h4>
                            <div className="icon-text">
                                <img src="src\components\Icons\map-pin.svg" alt="Map pin icon" className="small-icon"></img>
                                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                            </div>
                            <div className="icon-text">
                                <img src="src\components\Icons\Phonecall.svg" alt="Phonecall icon" className="small-icon"></img>
                                <span>(406) 555-0120</span>
                            </div>
                            <div className="icon-text">
                                <img src="src\components\Icons\bx-time-five.svg" alt="Clock icon" className="small-icon"></img>
                                <span><b>Mon - Fri:</b> 9:00 am - 22:00 am <br>
                                    <b>Sat - Sun:</b> 9:00 am - 20:00 am</span>
                            </div>
                        </div>
                        <div className="location" id="location-2">
                            <h4>Medical Center 2</h4>
                            <div className="icon-text">
                                <img src="src\components\Icons\map-pin.svg" alt="Map pin icon" className="small-icon"></img>
                                <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
                            </div>
                            <div className="icon-text">
                                <img src="src\components\Icons\Phonecall.svg" alt="Phonecall icon" className="small-icon"></img>
                                <span>(406) 544-0123</span>
                            </div>
                            <div className="icon-text">
                                <img src="src\components\Icons\bx-time-five.svg" alt="Clock icon" className="small-icon"></img>
                                <span><b>Mon - Fri:</b> 9:00 am - 22:00 am <br>
                                <b>Sat - Sun:</b> 9:00 am - 20:00 am</span>
                            </div> 
                        </div>
                        <div className="social-logos">
                            <img src="src\components\Icons\fb.svg" alt="Facebook logo" className="social-light"></img>
                            <img src="src\components\Icons\fb-dark.svg" alt="Facebook logo" className="social-dark"></img>
                            <img src="src\components\Icons\tw.svg" alt="Twitter logo" className="social-light"></img>
                            <img src="src\components\Icons\tw-dark.svg" alt="Twitter logo" className="social-dark"></img>
                            <img src="src\components\Icons\ig.svg" alt="Instagram logo" className="social-light"></img>
                            <img src="src\components\Icons\ig-dark.svg" alt="Instagram logo" className="social-dark"></img>
                            <img src="src\components\Icons\yt.svg" alt="Youtube logo" className="social-light"></img>
                            <img src="src\components\Icons\yt-dark.svg" alt="Youtube logo" className="social-dark"></img>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Contact2