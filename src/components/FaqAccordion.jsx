import React, { useContext } from 'react'
import Faq from './Faq'
import { SiliconContext } from '../contexts/SiliconContext'

function FaqAccordion() {
  
  const { faq } = useContext(SiliconContext);
  

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