import React, { useState } from 'react'
import axios from 'axios'
import validateForm from '../assets/JS-files/validateForm'
import { emailPattern } from '../assets/JS-files/regexPatterns'

function Subscribe() {
    const [formData, setFormData] = useState({
        email: ''
    }); 
    const [submitted, setSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (e) => {
        const {id, value } = e.target;
        setFormData({...formData, [id]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm(formData.email, emailPattern)) {
            setIsValid(true);
          } else {
            setIsValid(false);
        }

        const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', formData);

        if (res.status === 200) {
            setSubmitted(true);
            setFormData({email: ''});
        }
        else {
            console.log(res.data);
            console.log(res);
            console.log (formData);
        }
    }

    if (submitted) {
        return (
            <div className='container' id='subscribe-container'>
                <div className="bell-sub">
                    <div className="image-container" id="bell-container">
                        <img src="src/assets/Icons/bell.svg" alt="Notification bell icon."></img>
                    </div>
                    <h4 id="subscribe-text">Thanks for subscribing!</h4>
                </div>
            </div>
        )
    }

  return (
    <section aria-label="Subscription offer" id="subscribe-section">
        <div className="container" id="subscribe-container">
            <div className="bell-sub">
                <div className="image-container" id="bell-container">
                    <img src="src/assets/Icons/bell.svg" alt="Notification bell icon."></img>
                </div>
                    <h4 id="subscribe-text">Subscribe to our newsletter<span> to stay informed about our latest updates</span></h4>
            </div>
            <form id="input-div" noValidate onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleInputChange} id="email" type="email" value={ formData.email } placeholder="  &#9993;  Your email" ></input>
                    {isValid ? (<p></p>) : (<p className="error-message">Please enter a valid email adress.</p>)}
                </div>
                <button className="button" id="sub-btn">Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Subscribe;