import React from 'react'
import PhoneCarousel from '../components/PhoneCarousel'

function Page3HowDoesItWork() {
  return (
    <section aria-label="How does it work?" id="page-3">
        <div className="content-box container" id="p-3">
            <div className="text-item">
                <h2>How Does It Work?</h2>
            </div>
            <PhoneCarousel />
            <div className="text-item" id="transfers">
                <h4 id="transfer-tablet">
                    <span id="step-3">Step 3. </span>Transfers to people from your contact list
                </h4> 
                <h4 id="transfer-desktop">Latest transaction history</h4>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
        </div>
    </section>
  )
}

export default Page3HowDoesItWork