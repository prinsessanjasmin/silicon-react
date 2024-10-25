import React from 'react'

function ConsultationCard() {
  return (
    <div className="consultation-card" id="consultation-card">
        <h3>Get Online Consultation</h3>
        <form className="contact-form">
            <div className="input-group">
                <label htmlFor="full-name">Full name</label>
                <input type="text" id="full-name"></input>
            </div>
            <div className="input-group">
                <label htmlFor="email-adress">Email adress</label>
                <input type="text" id="email-adress"></input>
            </div>
            <div className="input-group">
                <label htmlFor="specialist">Specialist</label>
                <select id="specialist">
                    <option value="">Select a speciality...</option>
                    <option value="accounting">Accounting</option>
                    <option value="web-programming">Web programming</option>
                    <option value="back-end">Back-end</option>
                    <option value="web-design">Web design</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button className="button" type="submit">Make an appointment</button>
        </form>
    </div>
  )
}

export default ConsultationCard