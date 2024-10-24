import React from 'react'

function AppFeatureListItem({ picSrc, picAlt, headline, text }) {
  return (
    <li className="app-feature-li">
        <div className="icon-holder">
            <img src={picSrc} alt={picAlt}></img>
        </div>
        <div className="text-item">
            <h5>{headline}</h5>
            <p>{text}.</p>
        </div>
    </li>
  )
}

export default AppFeatureListItem