import React from 'react'

function Location() {
  return (
    <div className="location" id="">
        <h4>Medical Center 1</h4>
        <div className="icon-text">
            <img src="src/assets/Icons/map-pin.svg" alt="Map pin icon" className="small-icon"></img>
            <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
        </div>
        <div className="icon-text">
            <img src="src/assets/Icons/Phonecall.svg" alt="Phonecall icon" className="small-icon"></img>
            <span>(406) 555-0120</span>
        </div>
        <div className="icon-text">
            <img src="src/assets/Icons/bx-time-five.svg" alt="Clock icon" className="small-icon"></img>
            <span><b>Mon - Fri:</b> 9:00 am - 22:00 am <br />
                <b>Sat - Sun:</b> 9:00 am - 20:00 am</span>
        </div>
    </div>
  )
}

export default Location