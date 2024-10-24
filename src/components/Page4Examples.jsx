import React from 'react'

function Page4Examples() {
  return (
    <section aria-label="Examples of use" id="page-4">
            <div className="container" id="p-4">
                <div className="p4-flex">
                    <div className="p4-text">
                        <h2>Make your money transfer simple and clear</h2>
                        <ul className="p4-ul-1">
                            <li className="p4-li-1">
                                <i className="fa-regular fa-circle-check"></i>  
                                <p>Banking transactions are free for you</p>
                            </li>
                            <li className="p4-li-1">
                                <i className="fa-regular fa-circle-check"></i>
                                <p>No monthly cash commission</p>
                            </li>
                            <li className="p4-li-1">
                                <i className="fa-regular fa-circle-check"></i> 
                                <p>Manage payments and transactions online</p>
                            </li>
                        </ul>
                    <button className="button">Learn more &rarr;</button>
                    </div>
                    <div className="image-container" id="p4-img-1">
                        <div id="scr-1">
                            <img loading="lazy" src="src\components\Images\Screenshot1.svg" alt="Screenshot of diagram."></img>
                        </div>
                        <div id="scr-2">
                            <img loading="lazy" src="src\components\Images\Screenshot2.svg" alt="Screenshot of contacts."></img>
                        </div>
                    </div>
                </div>
                <div className="p4-flex">
                    <div className="image-container" id="p4-img-2">
                        <div id="scr-3">
                            <img loading="lazy" src="src\components\Images\Screenshot3.svg" alt="Screen shot of contacts."></img>
                        </div>
                        <div id="scr-visa">
                            <img loading="lazy" src="src\components\Images\Visacard1.svg" alt="A credit card."></img>
                        </div>
                    </div>
                    <div className="p4-text">
                        <h2>Receive payment from international bank details</h2>
                        <ul className="p4-ul-2">
                            <li className="p4-li-2">
                                <img src="src\components\Icons\Card.svg" alt="Credit card icon."></img>
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </li>
                            <li className="p4-li-2">
                                <img src="src\components\Icons\Wallet.svg" alt="Wallet icon."></img>
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </li>
                        </ul>
                        <button className="button">Learn more &rarr;</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Page4Examples