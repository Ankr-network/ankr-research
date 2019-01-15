import React, { Component } from 'react';
import DemoForm from '../forms/DemoForm';
import update1 from '../../images/update-1.png';
import update2 from '../../images/update-2.png';
import update3 from '../../images/update-3.png';
import update4 from '../../images/update-4.png';
import update5 from '../../images/update-5.png';
import updateToken1 from '../../images/up-tocken-1.jpeg';
import updateToken from '../../images/update-token.png';
import whatsAnkrLogo from '../../images/whatsankr-logo.png';
import bracket from '../../images/bracket.svg';
import RoadmapCarousel from '../carousel/RoadmapCarousel.js';
import done from '../../images/done-icon.svg';
import whyankr1 from '../../images/e-1.svg';
import whyankr2 from '../../images/e-10.svg';
import whyankr3 from '../../images/e-3.svg';
import whyankr4 from '../../images/e-2.svg';
import partner1 from '../../images/sap.svg';
import partner2 from '../../images/boinc.svg';
import partner3 from '../../images/some.svg';
import partner4 from '../../images/dora.svg';
import partner5 from '../../images/hack.svg';
import partner6 from '../../images/berk.svg';
import partner7 from '../../images/shan.svg';
import logo from '../../images/logo-icon.svg';

import "../../css/Home.css";
import introVideo from '../../images/intro.mp4';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            newsShow: false,
            display: 1,
        };
    }

    handleNewsShow = () => {
        this.setState({ newsShow: !this.state.newsShow });
    }

    render() {
        return(
            <div>
                { /* Main */ }    
                <div className="home-main">
                    <video id='home-intro-video' autoPlay muted loop>
                        <source src={introVideo} type="video/mp4"/>
                    </video>

                    <div className="home-main-text">
                        <h1 className="home-main-title">The Cloud, Trusted</h1>

                        <p className="home-main-subtitle">Build a Faster, Cheaper, Securer cloud using idle processing power in data centers and edge devices</p>

                        <div className="home-demo">
                            <button className="demo-button">Request a Demo</button>
                        </div>
                        <img className="home-main-icon" src={done} />
                    </div>
                </div>


                {/* What's Ankr */}
                <div className="home-whatsankr">
                    <div>
                        <img className="home-whatsankr-logo" src={whatsAnkrLogo} alt="ankr-logo" />
                    </div>
                    <div className="home-whatsankr-content">
                    <h2 className="home-whatsankr-title">What's Ankr?</h2>
                    <div className = "home-whatsankr-divider" > </div>
                    <p className="home-whatsankr-text">Ankr is a distributed computing platform that aims to leverage
                idle computing resources in data centers and edge devices.What
                Ankr enables is a Sharing Economy model where enterprises and
                consumers can monetize their spare computing capacities from
                their devices, on - premise servers, private cloud and even public
                cloud.This enables Ankr to provide computing power much closer to
                users at a much cheaper price.</p>
                    <button className="home-whatsankr-button">Watch Video</button>
                    </div>
                </div>

                {/* Why Ankr */}
                <div className="home-whyankr">
                    <h1 className="home-whyankr-title">Why Ankr?</h1>
                    <div className = "home-whyankr-divider" > </div>
                    <div className="home-whyankr-text">
                        <div>
                            <div className="parent">
                                <img className="home-whyankr-bracket" src={bracket} />
                                <img  className = "home-whyankr-icon" src={whyankr1} />
                            </div>

                            <div className="home-whyankr-content">
                                <h4 className="home-whyankr-subtitle">Higher Availbility</h4>

                                <p className="home-whyankr-text">Deploy from the closest computing resources available across the
                                globe</p>
                            </div>
                        </div>

                        < div >
                            <div className="parent">
                                <img className="home-whyankr-bracket" src={bracket} />
                                <img  className = "home-whyankr-icon" src={whyankr2} />
                            </div>
                            < div className = "home-whyankr-content" >
                                <h4 className="home-whyankr-subtitle">Cheaper Price</h4>

                                <p className="home-whyankr-text">Sharing Economy’ s asset - light nature
                                results in fairer pricing</p>
                            </div> 
                        </div>

                        < div>
                            <div className="parent">
                            <img className="home-whyankr-bracket" src={bracket} />
                            <img  className = "home-whyankr-icon" src={whyankr3} />
                            </div>
                            < div className = "home-whyankr-content" >
                                <h4 className="home-whyankr-subtitle">Easier Integration</h4>
                                <p className="home-whyankr-text">Build from the tools and languages
                                    you already know</p>
                            </div>
                        </div>

                        < div>
                            <div className="parent">
                                <img className="home-whyankr-bracket" src={bracket} />
                                <img  className = "home-whyankr-icon" src={whyankr4} />
                            </div>
                            <div className="home-whyankr-content">
                                <h4 className="home-whyankr-subtitle">Securer Communication</h4>
                                <p className="home-whyankr-text">Leverage cryptographic primitives and
                                    TEEs to protect computation integrity</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Use Cases */}
                <div className="home-usecases">
                    <div className="home-usecases-title">
                        <h1 id="usecases">Use Cases</h1>
                        <div className="home-usecases-divider" > </div>
                        <h4 className= "home-usescases-subtitle">Ankr is versatile in various types of computing jobs.</h4>
                    </div>

                    <div>
                    <div className="home-usecases-list">
                        <div>
                            <span className="home-usecases-list-number">01</span> 
                            <span>Computation - heavy applications where computation
                            offsets communications</span>
                            <div className="home-usecases-list-divider"></div>
                        </div>

                        <div>
                            <span className="home-usecases-list-number">02</span> 
                            <span>Monte Carlo simulations(e.g., medical / geological research)</span>
                            <div className="home-usecases-list-divider"></div>
                        </div>

                        <div>
                            <span className="home-usecases-list-number">03</span> 
                            <span>Time - sensitive signal processing offloading(e.g., rendering
                                    for AR / VR)</span>
                            <div className="home-usecases-list-divider"></div>
                        </div>

                        <div>
                            <span className="home-usecases-list-number">04</span> 
                            <span>Offline data analytics without strict deadlines</span>
                            <div className="home-usecases-list-divider"></div>
                        </div>
                    </div>
                       
                    </div>
                </div>

                {/* roadmap */}

                <div className="home-roadmap">
                    <div className="home-roadmap-header">
                        <h1 className="home-roadmap-title"> Roadmap </h1>
                        <div className="roadmap-divider"> </div>
                    </div>
                    <RoadmapCarousel />
                </div>

            {/* partners */}
            <div className="home-partners">
                <div className="home-partners-title" >
                    <h1 id="partners"> Partners</h1>
                    < div className = "home-partners-divider" > </div>
                </div>
                <div className="home-partners-imgs">
                    <div> 
                        <img className="home-partners-img" src={partner1} />
                    </div>

                    <div> 
                        <img className="home-partners-img" src={partner2} />
                    </div>

                    <div> 
                        <img className="home-partners-img" src={partner3} />
                    </div>

                    <div> 
                        <img className="home-partners-img2" src={partner4} />
                    </div>

                    <div> 
                        <img className="home-partners-img" src={partner5} />
                    </div>

                    <div> 
                        <img className="home-partners-img2" src={partner6} />
                    </div>
                    
                    <div> 
                        <img className="home-partners-img2" src={partner7} />
                    </div>

                </div>
            </div>
            
            {/* latest news */}
                <div className="home-news">
                    <div className="home-news-title">
                        <h1 id='news'>Latest News</h1>
                        <div className="home-news-divider" > </div>
                    </div>
                    
                    <div className="home-news-item-content">
                        <div className="news-item">
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-5-4dc433998277" target="_blank">
                                <img className= 'home-news-img' src={update5} />
                            
                                <h4 className="home-news-subtitle">Ankr Network Bi - weekly Update 5</h4>
                            </a>
                                <p className="home-news-text">Over the past two weeks, we have made remarkable progress on
                                    technology development.Meanwhile we have planned...</p>
                           
                            <div className="medium">
                                <span>
                                    <img className="news-logo" src={logo} />
                                </span>
                                <a className="link-date" href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-5-4dc433998277" target="_blank">medium.com/ankr-network</a>
                                <span className="date link-date">-Dec/03/2018</span>
                            </div>
                        </div>

                        <div className="news-item">
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-4-be4ce1c8b5b7" target="_blank">
                                <img className= 'home-news-img'src={update4} />
                                <h4 className="home-news-subtitle">Ankr Network Bi - weekly Update 4</h4>
                            </a>
                            <p className="home-news-text">Over the past two weeks, we have been focusing on solutions
                                for utilising idle resources in data centers...</p>
                            <div className="medium">
                                <span>
                                    <img className="news-logo" src={logo} />
                                </span>
                                <a className="link-date" href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-4-be4ce1c8b5b7" target="_blank">medium.com/ankr-network</a>
                              
                                <span className="date link-date">-Nov/19/2018</span>
                            </div>
                        </div>

                        <div className="news-item">
                            <a href="https://medium.com/ankr-network/ankr-bi-weekly-issue-3-2407c48af11" target="_blank">
                                <img className= 'home-news-img' src={update3} />
                                <h4 className="home-news-subtitle">Ankr Network Bi - weekly Update 3</h4>
                            </a>
                            <p className="home-news-text">Welcome to Ankr Bi - weekly! This is our third issue, and
                                we appreciate your attention.First of all, we want to
                                express...</p>
                            <div className="medium">
                                <span>
                                    <img className="news-logo" src={logo} />
                                </span>
                                <a className="link-date" href="https://medium.com/ankr-network/ankr-bi-weekly-issue-3-2407c48af11" target="_blank">medium.com/ankr-network</a>
                          
                                <span className="date link-date"> -Nov/05/2018</span>
                            </div>
                        </div>

                        <div className={this.state.newsShow ? "news-item" : "news-item-hide"}>
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-2-user-feedback-contest-c66efd51fad3" target="_blank">
                                <img className= 'home-news-img' src={update2} />
                                <h4 className="home-news-subtitle">Ankr Network Bi-weekly Update 2 + User Feedback Contest</h4>
                            </a>
                            <p className="home-news-text">This week marks the second issuance of Ankr Network Bi-Weekly Update and the start of our User Feedback & Advice Contest...</p>
                            <div className="medium">
                                <span>
                                    <img className="news-logo" src={logo} />
                                </span>
                                <a className="link-date" href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-2-user-feedback-contest-c66efd51fad3" target="_blank">medium.com/ankr-network</a>
                      
                                <span className="date link-date">-Oct/22/2018</span>
                            </div>
                        </div>

                        <div className={this.state.newsShow ? "news-item" : "news-item-hide"}>
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-1-3588f19fe5a5" target="_blank">
                                <img className= 'home-news-img' src={update1} />
                                <h4 className="home-news-subtitle">Ankr Network Bi-weekly Update 1</h4>
                            </a>
                            <p className="home-news-text">This week marks the first issuance of Ankr Network Bi-Weekly Update. We thank you for your consistent support.</p>
                            <div className="medium">
                                <span>
                                    <img className="news-logo" src={logo} />
                                </span>
                                <a className="link-date" href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-1-3588f19fe5a5" target="_blank">medium.com/ankr-network</a>
                              
                                <span className="date link-date">-Oct/08/2018</span>
                            </div>
                        </div>

                        <div className={this.state.newsShow ? "news-item" : "news-item-hide"}>
                            <a href="https://medium.com/ankr-network/ankr-network-update-and-token-sale-instructions-a377a0ffa47e" target="_blank">
                                <img className= 'home-news-img' src={updateToken} />
                                <h4 className="home-news-subtitle">Ankr Network Update and Token Sale Instructions</h4>
                            </a>
                            <p className="home-news-text">We don’t think projects should ask communities to do things like Proof of Love or Proof of Care. Here at Ankr...</p>
                            <div className="medium">
                                <span>
                                    <img className="news-logo" src={logo} />
                                </span>
                                <a className="link-date"  href="https://medium.com/ankr-network/ankr-network-update-and-token-sale-instructions-a377a0ffa47e" target="_blank">medium.com/ankr-network</a>
                      
                                <span className="date link-date">-Sep/14/2018</span>
                            </div>
                        </div>

                        <div className={this.state.newsShow ? "news-item" : "news-item-hide"}>
                            <a href="https://medium.com/ankr-network/where-we-were-where-we-are-where-were-going-721f1be06227" target="_blank">
                                <img className= 'home-news-img' src={updateToken1} />
                                <h4 className="home-news-subtitle">Where We Were, Where We Are, Where We’re Going</h4>
                            </a>
                            <p className="home-news-text">A token can mean a lot of things. But to us at Ankr, a token is more than a cryptocurrency. ANKR tokens are...</p>
                            <div className="medium">
                                <span>
                                    <img className="news-logo" src={logo} />
                                </span>
                                <a className = "link-date" href="https://medium.com/ankr-network/where-we-were-where-we-are-where-were-going-721f1be06227" target="_blank">medium.com/ankr-network</a>
                                <span className="date link-date" >-Jul/30/2018</span>
                            </div>
                        </div>
                    </div>

                    <button id="news-button" onClick={this.handleNewsShow}>{this.state.newsShow ? "Less News" : "More News"}</button>
                </div>
            </div>
        );
    }
}

export default Home;