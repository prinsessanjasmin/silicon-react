import React from 'react'

function Page5Reviews() {
  return (
    <section aria-label="What our clients think" id="page-5">
                <div className="container" id="p-5">
                    <div id="p-5-text">
                        <h2>Clients are Loving Our App</h2>
                    </div>
                    <div className="review-card">
                        <div className="text-box">
                            <img id="quotes" src="/Icons/quotes.svg" alt=""></img>
                            <p className="stars">★★★★☆</p>
                            <p className="review" id="review-1">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                            <div className="reviewer-byline">
                                <img className="avatar-image" src="Icons/Fannie.svg" alt="Fannie Summers' avatar"></img>
                                <div>
                                    <h6>Fannie Summers</h6>
                                    <p className="sm-p">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-card">
                        <div className="text-box">
                            <img id="quotes" src="/Icons/quotes.svg" alt=""></img>
                            <p className="stars">★★★★★</p>
                            <p className="review" id="review-2">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                            <div className="reviewer-byline">
                                <img className="avatar-image" src="Icons/Albert.svg" alt="Albert Flores' avatar"></img>
                                <div>
                                    <h6>Albert Flores</h6>
                                    <p className="sm-p">Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Page5Reviews