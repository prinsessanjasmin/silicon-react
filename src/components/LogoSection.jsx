import React from 'react'

function LogoSection() {
  return (
    <div>
        <section aria-label="Some of our customers" id="logo-section">
            <div className="logo-container container">
                <div className="logo-holder">
                    <img src="src\components\Logos\Logo1.svg" alt="Logo of contributing company #1"></img>
                </div>
                <div className="logo-holder">
                    <img src="src\components\Logos\Logo2.svg" alt="Logo of contributing company #2"></img>
                </div>
                <div className="logo-holder">
                    <img src="src\components\Logos\Logo3.svg" alt="Logo of contributing company #3"></img>
                </div>
                <div className="logo-holder">
                    <img src="src\components\Logos\Logo4.svg" alt="Logo of contributing company #4"></img>
                </div>
                <div className="logo-holder logo-lrg" >
                    <img src="src\components\Logos\Logo5.svg" alt="Logo of contributing company #5"></img>
                </div>
                <div className="logo-holder logo-lrg">
                    <img src="src\components\Logos\Logo6.svg" alt="Logo of contributing company #6"></img>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LogoSection