import React from 'react'
import Page1Hero from '../sections/Page1Hero'
import LogoSection from './LogoSection'
import Page2Appfeatures from '../sections/Page2Appfeatures'
import Page3HowDoesItWork from '../sections/Page3HowDoesItWork'
import Page4Examples from '../sections/Page4Examples'
import Page5Reviews from '../sections/Page5Reviews'
import Page6Faq from '../sections/Page6Faq'
import Subscribe from './Subscribe'

function MainPage() {
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

export default MainPage