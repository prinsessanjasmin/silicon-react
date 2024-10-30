import React, { useState } from 'react'
import axios from 'axios'

function ConsultationCard() {
    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' }); 
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value.trim() === '') {
            setErrors(prevErrors => ({
                ...prevErrors, [name]: "This field is required"
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors, [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = "This field is required";
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return
        }

        const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', formData);

        if (res.status === 200) {
            console.log(res.data);
            console.log(res);
            console.log (formData);
            setSubmitted(true);
            setFormData({ fullName: '', email: '', specialist: '' });
        }
        else {
            console.log(res.data);
            console.log(res);
            console.log (formData);
        }
    }

    const handleOk = () => {
        setSubmitted(false);
    }

    if (submitted) {
        return (
            <div className="consultation-card submitted-message" id="consultation-card">
                <h5>You have requested an appointment! We'll get back to you soon!</h5>
                <button className="button" onClick={ handleOk }>Got it!</button>
            </div>
        )
    }

  return (
    <div className="consultation-card" id="consultation-card">
        <h3>Get Online Consultation</h3>
        <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="full-name">Full name</label>
                <input onChange={handleInputChange} type="text" id="full-name" name='fullName' value={formData.fullName} ></input>
                <p className='error-message-2'>{errors.fullName && errors.fullName}</p>
            </div>
            <div className="input-group">
                <label htmlFor="email-adress">Email adress</label>
                <input onChange={handleInputChange} type="text" id="email-adress" name='email' value={formData.email}></input>
                <p className='error-message-2'>{errors.email && errors.email}</p>
            </div>
            <div className="input-group">
                <label htmlFor="specialist">Specialist</label>
                <input onChange={handleInputChange} type="text" id="specialist" name='specialist' value={formData.specialist} ></input>
                <p className='error-message-2'>{errors.specialist && errors.specialist}</p>
            </div>
            {/* <div className="input-group">
                <label htmlFor="specialist">Specialist</label>
                <select id="specialist" name='specialist'>
                    <option value="">Select a speciality...</option>
                    <option value="accounting">Accounting</option>
                    <option value="web-programming">Web programming</option>
                    <option value="back-end">Back-end</option>
                    <option value="web-design">Web design</option>
                    <option value="other">Other</option>
                </select>
            </div> */}
            <button className="button" type="submit">Make an appointment</button>
        </form>
    </div>
  )
}

export default ConsultationCard