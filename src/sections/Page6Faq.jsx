import React from 'react'
import FaqAccordion from '../components/FaqAccordion'

function Page6Faq() {
  return (
    <section aria-label="Frequently asked questions" id="page-6">
                <div className="content-box container" id="p-6">
                    <div className="text-item">
                        <h3>Any questions? Check out the FAQs</h3>
                        <p className="lrg-p">Still have unanswered questions and need to get in touch?</p>
                    </div>
                    <FaqAccordion />
                    <div className="container" id="contact-container">
                        <div className="card" id="card-1">
                            <div className="image-container">
                                <img className="contact-icon" src="src\components\Icons\Phonecall.svg" alt="Telephone icon."></img>
                            </div>
                            <p>Still have questions?</p>
                            <a id="phone-contact" href="#">Contact us &rarr;</a>
                        </div>
                        <div className="card" id="card-2">
                            <div className="image-container">
                                <img className="contact-icon" src="src\components\Icons\Message.svg" alt="Message icon."></img>
                            </div>
                            <p>Don't like phone calls?</p>
                            <a id="message-contact" href="#">Contact us &rarr;</a>
                        </div>
                    </div>
                    <div className="container" id="button-container">
                        <button className="button" id="contact-btn">Contact us now</button>
                    </div>
                </div>
            </section>
  )
}

export default Page6Faq