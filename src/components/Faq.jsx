import React, { useState, useEffect } from 'react'

function Faq({ id, title, content }) {

  const [clicked, setClicked] = useState(false)
    
  const handleClick = () => {
    setClicked(prev => !prev);
  }

  return (
    <div className={`faq ${clicked ? 'faq-open' : ''}`} id="">
        <div type="button" onClick={handleClick} className="collapsible" id={id}>
            <p>{ title }</p>
            <button className="down-btn collapse-down" aria-label="Read the answer" ></button>
        </div>
        <div className={`content ${clicked ? 'open' : 'collapsed'}`} id="">
            <p>{ content }</p>
        </div>
    </div>
  )
}

export default Faq