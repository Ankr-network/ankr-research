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
import "../../css/Home.css";

class Home extends Component {


    render() {
        return(
            <div>
                { /* Main */ }    
                <div className="home-main">
                    <h1 className="home-main-title">The Cloud, Trusted</h1>
                    <p className="home-main-subtitle">Build a Faster, Cheaper, Securer cloud using idle processing power in data centers and edge devices</p>
                    <DemoForm
   
                        show={this.props.demoShow}
                        onChange={this.props.onDemoChange}
                    />

                    <img className="home-main-icon" src={done} />
                </div>


                {/* What's Ankr */}
                <div className="home-whatsankr">
                    <div>
                        <img className="home-whatsankr-logo" src={whatsAnkrLogo} alt="ankr-logo" />
                    </div>
                    <div>
                    <h2 className="home-whatsankr-title">What's Ankr?</h2>
                    <p className="home-whatsankr-text">Ankr is a distributed computing platform that aims to leverage
                idle computing resources in data centers and edge devices.What
                Ankr enables is a Sharing Economy model where enterprises and
                consumers can monetize their spare computing capacities from
                their devices, on - premise servers, private cloud and even public
                cloud.This enables Ankr to provide computing power much closer to
                users at a much cheaper price.</p>
                    <button>Watch Video</button>
                    </div>
                </div>

                {/* Why Ankr */}
                <div className="home-whyankr">
                    <h1 className="home-whyankr-title">Why Ankr?</h1>

                    <div className="home-whyankr-text">
                        <div>
                            <img className="home-whyankr-bracket" src={bracket} />
                            <h3>Higher Availbility</h3>

                            <p>Deploy from the closest computing resources available across the
                                globe</p>
                        </div>

                        < div >
                            <img className="home-whyankr-bracket" src={bracket} />
                            <h3>Cheaper Price</h3>

                            <p>Sharing Economy’ s asset - light nature
                                results in fairer pricing</p>
                        </div>

                        < div>
                            <img className="home-whyankr-bracket" src={bracket} />
                            <h3>Easier Integration</h3>
                            <p>Build from the tools and languages
                                you already know</p>
                        </div>

                        < div>
                             <img className="home-whyankr-bracket" src={bracket} />
                            <h3>Securer Communication</h3>
                            <p>Leverage cryptographic primitives and
                                TEEs to protect computation integrity</p>
                        </div>
                    </div>
                </div>

                {/* Use Cases */}
                <div className="home-usecases">
                    <div className="home-usecases-title">
                    <h1>Use Cases</h1>

                    <h4>Ankr is versatile in various types of computing jobs.</h4>
                    </div>

                    <div>
                    <ol type="1" className="home-usecases-list">
                        <li> Computation - heavy applications where computation
                        offsets communications</li>
                        <li>Monte Carlo simulations(e.g., medical / geological research)</li>

                        <li>Time - sensitive signal processing offloading(e.g., rendering
                                for AR / VR)</li>

                        <li>Offline data analytics without strict deadlines</li>
                    </ol>
                    </div>
                </div>
                <div className="home-roadmap">
                <h2> Roadmap </h2>
                <RoadmapCarousel />
                </div>
                {/* Roadmap */}
                {/* <div>
                    <h2>Roadmap</h2>

                <div>
                    <div>
                        <h4>Testnet</h4>

                        <p>September 2018</p>
                    </div>

                    <div>
                        <h4>Integration with BONIC</h4>

                        <p>October 2018</p>
                    </div>

                    <div>
                        <h4>Solution for Idle Data Center</h4>

                        <p>November 2018</p>
                    </div>

                    <div>
                        <h4>New Website Release</h4>

                        <p>December 2018</p>
                    </div>
                </div>
            </div> */}

            {/* parnter */}
            <div>
                <h2>Partners:</h2>
                <ul>
                    <li>SAP</li>
                    <li>BONIC</li>
                    <li>Derahacks</li>
                    <li>Berkeley</li>
                    <li>上海交通大学</li>
                </ul>
            </div>
            
            {/* latest news */}
                <div className="news" id="news">
                    <h2>Latest News</h2>

                    <div className="news-item">
                        <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-5-4dc433998277" target="_blank">
                            <img src={update5} />
                            <h4>Ankr Network Bi - weekly Update 5</h4>
                        </a>
                        <p>Over the past two weeks, we have made remarkable progress on
                            technology development.Meanwhile we have planned...</p>
                        <div>
                            {/*<img></img>*/}
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-5-4dc433998277" target="_blank">medium.com/ankr-network</a>
                            <div>-Dec/03/2018</div>
                        </div>
                    </div>

                    <div className="news-item">
                        <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-4-be4ce1c8b5b7" target="_blank">
                            <img src={update4} />
                            <h4>Ankr Network Bi - weekly Update 4</h4>
                        </a>
                        <p>Over the past two weeks, we have been focusing on solutions
                            for utilising idle resources in data centers...</p>
                        <div>
                            {/*<img></img>*/}
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-4-be4ce1c8b5b7" target="_blank">medium.com/ankr-network</a>
                            <div>-Nov/19/2018</div>
                        </div>
                    </div>

                    <div className="news-item">
                        <a href="https://medium.com/ankr-network/ankr-bi-weekly-issue-3-2407c48af11" target="_blank">
                            <img src={update3} />
                            <h4>Ankr Network Bi - weekly Update 3</h4>
                        </a>
                        <p>Welcome to Ankr Bi - weekly!This is our third issue, and
                            we appreciate your attention.First of all, we want to
                            express...</p>
                        <div>
                            {/*<img></img>*/}
                            <a href="https://medium.com/ankr-network/ankr-bi-weekly-issue-3-2407c48af11" target="_blank">medium.com/ankr-network</a>
                            <div>-Nov/05/2018</div>
                        </div>
                    </div>

                    <div className="news-item">
                        <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-2-user-feedback-contest-c66efd51fad3" target="_blank">
                            <img src={update2} />
                            <h4>Ankr Network Bi-weekly Update 2 + User Feedback Contest</h4>
                        </a>
                        <p>This week marks the second issuance of Ankr Network Bi-Weekly Update and the start of our User Feedback & Advice Contest...</p>
                        <div>
                            {/*<img></img>*/}
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-2-user-feedback-contest-c66efd51fad3" target="_blank">medium.com/ankr-network</a>
                            <div>-Oct/22/2018</div>
                        </div>
                    </div>

                    <div className="news-item">
                        <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-1-3588f19fe5a5" target="_blank">
                            <img src={update1} />
                            <h4>Ankr Network Bi-weekly Update 1</h4>
                        </a>
                        <p>This week marks the first issuance of Ankr Network Bi-Weekly Update. We thank you for your consistent support.</p>
                        <div>
                            {/*<img></img>*/}
                            <a href="https://medium.com/ankr-network/ankr-network-bi-weekly-update-1-3588f19fe5a5" target="_blank">medium.com/ankr-network</a>
                            <div>-Oct/08/2018</div>
                        </div>
                    </div>

                    <div className="news-item">
                        <a href="https://medium.com/ankr-network/ankr-network-update-and-token-sale-instructions-a377a0ffa47e" target="_blank">
                            <img src={updateToken} />
                            <h4>Ankr Network Update and Token Sale Instructions</h4>
                        </a>
                        <p>We don’t think projects should ask communities to do things like Proof of Love or Proof of Care. Here at Ankr...</p>
                        <div>
                            {/*<img></img>*/}
                            <a href="https://medium.com/ankr-network/ankr-network-update-and-token-sale-instructions-a377a0ffa47e" target="_blank">medium.com/ankr-network</a>
                            <div>-Sep/14/2018</div>
                        </div>
                    </div>

                    <div className="news-item">
                        <a href="https://medium.com/ankr-network/where-we-were-where-we-are-where-were-going-721f1be06227" target="_blank">
                            <img src={updateToken1} />
                            <h4>Where We Were, Where We Are, Where We’re Going</h4>
                        </a>
                        <p>A token can mean a lot of things. But to us at Ankr, a token is more than a cryptocurrency. ANKR tokens are...</p>
                        <div>
                            {/*<img></img>*/}
                            <a href="https://medium.com/ankr-network/where-we-were-where-we-are-where-were-going-721f1be06227" target="_blank">medium.com/ankr-network</a>
                            <div>-Jul/30/2018</div>
                        </div>
                    </div>

                    <button>More News</button>
                </div>
            </div>
        );
    }
}

export default Home;