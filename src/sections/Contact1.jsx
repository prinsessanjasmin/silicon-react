import React from 'react'
import ConsultationCard from '../components/ConsultationCard'
import ContactUs from '../components/ContactUs'

function Contact1() {
  return (
    <section id="contact-page-1" aria-label="contact-page">
        <div className="container" id="p-contact-1">
            <ContactUs />
            <ConsultationCard />
        </div> 
    </section>
  )
}

export default Contact1