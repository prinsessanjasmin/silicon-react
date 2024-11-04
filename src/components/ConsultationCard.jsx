import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DropdownMenu from './DropdownMenu';
import { fullNamePattern, emailPattern } from '../assets/JS-files/regexPatterns';
import validateForm from '../assets/JS-files/validateForm';

function ConsultationCard() {
    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: 'Choose a speciality...' }); 
    const [submitted, setSubmitted] = useState(false);
    const [isFirstAttempt, setIsFirstAttempt] = useState(true);
    const [isFullNameValid, setIsFullNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isSpecialistValid, setIsSpecialistValid] = useState(true);
    const [readyToSubmit, setReadyToSubmit] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (!isFirstAttempt) {
            if (name === 'fullName') {
                setIsFullNameValid(validateForm(value, fullNamePattern));
            } else if (name === 'email') {
                setIsEmailValid(validateForm(value, emailPattern));
            }
        }
    }

    const handleDropdownSelect = (option) => {
        setFormData({ ...formData, specialist: option });
        if (!isFirstAttempt) {
            setIsSpecialistValid(option !== 'Choose a speciality...');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsFirstAttempt(false);

        setIsFullNameValid(validateForm(formData.fullName, fullNamePattern));
        setIsEmailValid(validateForm(formData.email, emailPattern));
        setIsSpecialistValid(formData.specialist !== 'Choose a speciality...');

        if (isFullNameValid && isEmailValid && isSpecialistValid) {
            setReadyToSubmit(true);
        }
    }

    useEffect(() => {
        if (readyToSubmit && isFullNameValid && isEmailValid && isSpecialistValid) {
            const submitForm = async () => {
                try {
                    const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', formData);

                    if (res.status === 200) {
                        console.log(res.data);
                        console.log(res);
                        console.log (formData);
                        setSubmitted(true);
                        setFormData({ fullName: '', email: '', specialist: '' });
                    }
                    else {
                        console.error('An error occurred:', error);
                    }
                } catch (error) {
                    console.error('An error occurred:', error);
                } 
                // finally {
                //     // Reset `readyToSubmit` after attempting to submit
                //     setReadyToSubmit(false);
                // }
            };
        } else {
            // Reset `readyToSubmit` if validation fails
            console.log(readyToSubmit, isFullNameValid, isEmailValid, isSpecialistValid)
        }
    }, [readyToSubmit, isFullNameValid, isEmailValid, isSpecialistValid]);     
    
    if (submitted) {
        return (
            <div className="consultation-card submitted-message" id="consultation-card">
                <h5>You have requested an appointment! We'll get back to you soon!</h5>
                <button className="button" onClick={ handleOk }>Got it!</button>
            </div>
        )
    }

    const handleOk = () => {
        setSubmitted(false);
    }

  return (
    <div className="consultation-card" id="consultation-card">
        <h3>Get Online Consultation</h3>
        <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="full-name">Full name</label>
                <input onChange={handleInputChange} type="text" id="full-name" name='fullName' value={formData.fullName} ></input>
                {isFullNameValid ? (<p></p>) : (<p className="error-message-2">Please enter your full name.</p>)}
            </div>
            <div className="input-group">
                <label htmlFor="email-adress">Email adress</label>
                <input onChange={handleInputChange} type="text" id="email-adress" name='email' value={formData.email}></input>
                {isEmailValid ? (<p></p>) : (<p className="error-message-2">Please enter a valid email address.</p>)}
            </div>
            <div className="input-group">
                <label htmlFor="specialist">Specialist</label>
                <DropdownMenu 
                    buttonClassName='dropdown-specialist-btn'
                    trigger={formData.specialist || 'Choose a speciality...'}
                    openClasses='canExpand open'
                    closedClasses='canExpand'
                    id='dropdown-form'
                    options={['Accounting', 'Web programming', 'Back-end', 'Web design', 'Other']}
                    onSelect={handleDropdownSelect}
                />
                {isSpecialistValid ? (<p></p>) : (<p className="error-message-2">Please choose a speciality from the list.</p>)}
            </div> 
            <button className="button" type="submit">Make an appointment</button>
        </form>
    </div>
  )
}

export default ConsultationCard