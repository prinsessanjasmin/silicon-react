import React, { useState, useEffect } from 'react'

function DarkmodeSwitch() {

    //Lots of help from ChatGPT on this one 

    const [wantsItDark, setWantsItDark] = useState(() => {
        // Retrieve stored preference from localStorage or check the system preference
        const storedPreference = localStorage.getItem("darkmode");
        if (storedPreference === 'on') {
            return true;
        } else if (storedPreference === 'off') {
            return false;
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    });

    useEffect(() => {
        const siliconWebsite = document.documentElement;

        // Apply or remove the dark mode class based on the state
        if (wantsItDark) {
            siliconWebsite.classList.add('darkmode');
            localStorage.setItem('darkmode', 'on');
        } else {
            siliconWebsite.classList.remove('darkmode');
            localStorage.setItem('darkmode', 'off');
        }
    }, [wantsItDark]); // Runs when wantsItDark changes

    
    // Toggle dark mode when checkbox is toggled
    const toggleDarkmode = () => {
        setWantsItDark(prev => !prev);
    };


  return (
    <li className="nav-list-item" id="toggle-switch-li">
        <div className="toggle-switch-button">
            <span className="toggle-switch-label">Dark Mode</span>
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkmode} checked={wantsItDark} id="dm-switch" aria-label="darkmode switch"></input>
                <span className="slider round"></span>
            </label> 
            {/* <!-- ovan kopierat från w3schools --> */}
        </div>
    </li>
  )
}

export default DarkmodeSwitch