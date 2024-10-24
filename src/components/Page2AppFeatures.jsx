import React from 'react'

function Page2AppFeatures() {
  return (
    <section aria-label="App features" id="page-2">
            <div className="content-box container" id="p-2">
                <div className="image-container" id="side-view">
                    <img src="src\components\Images\side-phone.svg" id="side-phone" alt="An iPhone displaying the Silicon App." loading="lazy"></img>
                </div>
                <div id="text-content">
                    <div className="textpage">
                        <h2 id="app-features">App Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at lacus.</p>
                    </div>
                    <ul className="app-feature-container">
                        <li className="app-feature-li">
                            <div className="icon-holder">
                                <img src="src\components\Icons\Card.svg" alt="Icon depicting credit card."></img>
                            </div>
                            <div className="text-item">
                                <h5>Easy payments</h5>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </li>
                        <li className="app-feature-li">
                            <div className="icon-holder">
                                <img src="src\components\Icons\Shield.svg" alt="Icon depicting a shield."></img>
                            </div>
                            <div className="text-item">
                                <h5>Data Security</h5>
                                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                            </div>
                        </li>
                        <li className="app-feature-li">
                            <div className="icon-holder">
                                <img src="src\components\Icons\Diagram.svg" alt="Icon depicting a diagram."></img>
                            </div>
                            <div className="text-item">
                                <h5>Cost Statistics</h5>
                                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                            </div>
                        </li>
                        <li className="app-feature-li">
                            <div className="icon-holder">
                                <img src="src\components\Icons\Question.svg" alt="Icon depicting speech balloons."></img>
                            </div>
                            <div className="text-item">
                                <h5>Support 24/7</h5>
                                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                            </div>
                        </li>
                        <li className="app-feature-li">
                            <div className="icon-holder">
                                <img src="src\components\Icons\Wallet.svg" alt="Icon depicting wallet."></img>
                            </div>
                            <div className="text-item">
                                <h5>Regular Cashback</h5>
                                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                            </div>
                        </li>
                        <li className="app-feature-li">
                            <div className="icon-holder">
                                <img src="src\components\Icons\Smiley.svg" alt="Icon depicting a smiley face."></img>
                            </div>
                            <div className="text-item">
                                <h5>Top Standards</h5>
                                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Page2AppFeatures