import React from 'react'

function ReviewCards( { id, author, jobRole, starRating, avatarUrl, comment }) {
  

  let stars; 

  switch (starRating) {

    case 1:
      stars = "★☆☆☆☆";
      break;
  
    case 2:
      stars = "★★☆☆☆";
      break;

    case 3:
      stars = "★★★☆☆";
      break;
    
    case 4:
      stars = "★★★★☆";
      break;

    case 5:
      stars = "★★★★★";
      break;
  
    default:
      stars = "No data";
      break;
  }


  return (
    <div className="review-card">
        <div className="text-box" id={ id }>
            <img id="quotes" src="/Icons/quotes.svg" alt=""></img>
            <p className="stars">{ stars }</p>
            <p className="review" id="review-1"> { comment } </p>
            <div className="reviewer-byline">
                <img className="avatar-image" src={ avatarUrl } alt="User's avatar"></img>
                <div>
                    <h6>{ author }</h6>
                    <p className="sm-p"> {jobRole} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCards