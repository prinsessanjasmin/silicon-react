import React from 'react'

function ReviewCards( { id, author, jobRole, starRating, avatarUrl, comment }) {
  return (
    <div className="review-card">
        <div className="text-box" id={ id }>
            <img id="quotes" src="/Icons/quotes.svg" alt=""></img>
            <p className="stars">{ starRating }</p>
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