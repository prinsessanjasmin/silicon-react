import React from 'react'
import Page1Hero from './Page1Hero'
import LogoSection from './LogoSection'
import Page2Appfeatures from './Page2Appfeatures'
import Page3HowDoesItWork from './Page3HowDoesItWork'
import Page4Examples from './Page4Examples'
import Page5Reviews from './Page5Reviews'
import Page6Faq from './Page6Faq'
import Subscribe from './Subscribe'

function Main() {
  return (
    <main>
        <Page1Hero />
        <LogoSection />
        <Page2Appfeatures />
        <Page3HowDoesItWork />
        <Page4Examples />
        <Page5Reviews />
        <Page6Faq />
        <Subscribe />
    </main>
  )
}

export default Main