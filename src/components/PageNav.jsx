import React from 'react'

function PageNav() {
  return (
    <div className="page-nav">
        <a href="/index.html">
            <span>
                <i className="fa-solid fa-house"></i>
            </span>
            <span>Homepage</span>
        </a>
        <span><i className="fa-solid fa-angles-right"></i></span>
        <a className="active" href="/contact.html">
            <span>Contact</span>
        </a>
    </div>
  )
}

export default PageNav