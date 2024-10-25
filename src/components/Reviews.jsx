import React, { useEffect, useState }  from 'react'
import ReviewCards from './ReviewCards'


function Reviews() {
  const [testimonials, setTestimonials] = useState(); 

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(json => setTestimonials(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
        <div id="p-5-text">
            <h2>Clients are Loving Our App</h2>
        </div>
        <>
        {testimonials?.length > 0 ? (
          testimonials.slice(0, testimonials.length).map((item, index) => (
            <ReviewCards key={index} id={item.id} author={item.author} jobRole={item.jobRole} starRating={item.starRating} avatarUrl={item.avatarUrl} comment={item.comment} />
        ))
        ) : testimonials === null ? (
          <p>Loading testimonials...</p>
        ) : (
          <p>No testimonials available</p>
        )}
        </>
    </>
  )
}

export default Reviews