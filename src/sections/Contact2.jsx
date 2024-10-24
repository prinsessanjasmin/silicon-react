import React from 'react'
import Location from '../components/Location'
import SocialMediaLogos from '../components/SocialMediaLogos'

function Contact2() {
  return (
    <section id="contact-page-2" aria-label="contact-page-with-map">
                <div className="container" id="p-contact-2">
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12621.335361536538!2d-122.40866839022975!3d37.73531158510237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1729170961143!5m2!1sen!2sse" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="location-box">
                        <Location />
                        <Location />
                        <SocialMediaLogos />
                    </div>
                </div>
            </section>
  )
}

export default Contact2