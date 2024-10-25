import React, { useState, useEffect } from 'react'
import Faq from './Faq'

function FaqAccordion() {
  const [faq, setFaq] = useState(); 

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then(response => response.json())
      .then(json => setFaq(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="collapse-faq">
      {faq?.length > 0 ? (
          faq.slice(0, faq.length).map((item, index) => (
          <Faq key={index} id={item.id} title={item.title} content={item.content} />
          ))
          ) : faq === null ? (
            <p>Loading FAQs...</p>
          ) : (
            <p>No FAQs available</p>
          )}
    </div>
  )
}

export default FaqAccordion