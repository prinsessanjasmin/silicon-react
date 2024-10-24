import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Contact1 from './Contact1'
import Contact2 from './Contact2'

function ContactMain() {
  return (
    <>
        <div id='wrapper'>
            <Navigation />
            <Contact1 />
            <Contact2 />
            <Footer />
        </div>
    </>
  )
}

export default ContactMain