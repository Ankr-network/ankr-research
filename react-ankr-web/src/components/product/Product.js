import React, { Component } from 'react';
import ourVision from '../../images/our-vision.png';
import techOverview from '../../images/tech-overview.png';
import bracket from '../../images/bracket.svg';
import demo from '../../images/screenshot.jpg';
import { Button } from 'react-bootstrap';
import computingJob1 from '../../images/e-4.svg';
import computingJob2 from '../../images/e-5.svg';
import computingJob3 from '../../images/e-6.svg';
import Iframe from "react-iframe";
import {Link} from 'react-router-dom';

import  '../../css/Product.css';

class Product extends Component {
    render() {
        return(
            <div className="product">
                {/*1st part: "our vision"*/}
                <div className="product-vision">
                    < div  >
                    <img className = "product-vision-img" src={ourVision} alt="our vision" />
                    </div>

                    <div className='product-vision-text'>
                    <h1 className="product-vision-title">Our Vision</h1>
                    < div className = "change-world-h1-divider" > </div>
                    <p className="product-vision-subtext">Cloud Computing is projected to be a trillion dollar market, yet it is monopolized by some of the largest tech conglomerates in the world. Only these giants can afford the high human capital cost and upfront server costs, but this only results in a higher margin for customers.</p>
                    <p className = "product-vision-subtext" > We believe we can provide lower the barrier
                    for businesses and consumers around the world to enter the cloud by bring compute resources closer to them at a cheaper price. </p>
                    </div>
                </div>

                {/*2nd part: "Trend for Computing"*/}
                <div className="product-trend">
                    <div>
                    <h2 className="product-trend-title"> Trend for computing </h2>
                    </div>
                    <div className="product-trend-list">
                        <div>
                            <div className="product-trend-number">01</div>
                            <div className="product-trend-list-divider"></div>
                            <div className="product-trend-list-title">Mainframe Computer</div>
                            <div className="product-trend-list-text">IBM, Dell, HP</div>
                        </div>

                        <div>
                            <div className="product-trend-number">02</div>
                            <div className="product-trend-list-divider"></div>
                            <div className="product-trend-list-title">Colocation Centers</div>
                            <div className="product-trend-list-text">Rackspace, DigitalOcean</div>
                        </div>

                        <div>
                            <div className="product-trend-number">03</div>
                            <div className="product-trend-list-divider"></div>
                            <div className="product-trend-list-title">Public Cloud</div>
                            <div className="product-trend-list-text">AWS, Azure</div>
                        </div>

                        <div>
                            <div className="product-trend-number">04</div>
                            <div className="product-trend-list-divider"></div>
                            <div className="product-trend-list-title">Distributed Cloud</div>
                            <div className="product-trend-list-text">Ankr</div>
                        </div>
                    </div>
                </div>

                {/*3rd part: "Technology Overview"*/}
                <div className="product-tech" id="tech_overview">
                    <div>
                        <img className="product-tech-img" src={techOverview} alt="tech overview" />
                    </div>
                    

                    <div className="product-tech-overview" >
                    <h1 className="product-tech-title">Technology Overview</h1>
                    < div className = "product-tech-h1-divider" > </div>
                    <h4 className="product-tech-subtitle">Ankr's innovations include:</h4>
                    <ul className="product-tech-list">
                        <li>Resource discovery and repurposing for containerized microservices</li>
                        <li>Dynamic pricing marketplace for using idle capacities</li>
                        <li>Seamless support for building applications using Trusted Execution Environment</li>
                        <li>Blockchain-native tokens for off-chain computation, micropayment, fulfillment and transaction settlement</li>
                    </ul>
                    </div>
                </div>

                {/*4th part: "Three major types of computing jobs solved"*/}
                <div className="product-major-computing-jobs">
                    < h2 className = "product-major-computing-jobs-title" > Three major types of computing jobs solved </h2>
                    < h3 className = "product-major-computing-jobs-subtitle" > by the existing Cloud providers </h3>
                    < div className = "product-major-computing-jobs-list" >
                        < div className = "product-major-computing-jobs-item" >
                            <div className='parent'>
                                <img className = "home-whyankr-bracket" src={bracket} />
                                <img  className = "home-whyankr-icon" src={computingJob1} />

                            </div>
                            < div className = "home-whyankr-content" >
                                <div className="product-subtitle">Batch processing</div>
                                <div className="product-sub-subtitle">EXAMPLE:</div>
                                <div>Elastic Mapreduce, hadoop</div>
                            </div>
                        </div>

                        < div className = "product-major-computing-jobs-item" >
                            <div className='parent'>
                                <img className = "home-whyankr-bracket" src={bracket} />
                                <img  className = "home-whyankr-icon" src={computingJob2} />

                            </div>
                            <div className = "home-whyankr-content" >
                                <div className="product-subtitle">Security & Privacy</div>
                                <div className="product-sub-subtitle">EXAMPLE:</div>
                                <div>Website, API Server, Daemon process</div>
                            </div>
                        </div>

                        < div className = "product-major-computing-jobs-item" >
                            <div className='parent'>
                                <img className = "home-whyankr-bracket" src={bracket} />
                                <img  className = "home-whyankr-icon" src={computingJob3} />

                            </div>
                            < div className = "home-whyankr-content" >
                                <div className="product-subtitle">Resource-Efficient framework</div>
                                <div className="product-sub-subtitle">EXAMPLE:</div>
                                <div>AWS Lambda, Serverless Architecture</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*5th part: "Data Center"*/}
                <div className="product-data-center">
                    <div className="product-data-center-item">
                        < h2 className = "product-data-center-title" > Data Center </h2>
                    </div>

                    <div className = "product-data-center-text" >
                        < div className = "product-data-center-subtext" >
                            <p>Small data center operators can improve the utilization rate for their resources, and thus improve both revenue and maintain a significant profit margin.</p>
                            <p>Ankr would leverage the power of kubernetes to share the resources inside data centers. And also with the help of containers, all three tasks of jobs are suitable to be run in this framework.</p>
                        </div>

                        
                        {/*media here: video*/}
                        < Iframe url = "https://www.youtube.com/embed/jrNanjJjWNA"
                            title="place-holder-video"
                            width="425px"
                            height="297px"
                            id="place-holder-data-center-video"
                            className=""
                            display="initial"
                            position="relative"
                            allowFullScreen
                            />
                        
                    </div>
                </div>

                {/*6th part: "PC & Mobile/Edge Devices"*/}
                <div>
                    <div className="product-data-center-pc">
                        <div className="product-data-center-pc-title">
                            <h2 className="product-data-center-pc-subtitle">PC</h2>
                            < div className = "product-data-center-pc-divider" > </div>
                            <h4 className="product-data-center-pc-text" >
                            Blockchain based on chain distributed cloud computing platform 
                            powered by Ankr innovative consensus protocol: Proof of Useful Work</h4>
                        </div>
                        <div className="product-data-center-pc-list">
                            <div className="product-data-center-pc-content1">
                                <span className="product-data-center-pc-number">01</span>
                                <span className="product-data-center-pc-list-title"> BOINC PLATFORM</span>
                                < div className = "product-data-center-pc-list-divider" > </div>
                                < Iframe url = "https://www.youtube.com/embed/pVoHeXauRaQ"
                                title="place-holder-video"
                                width="425px"
                                height="297px"
                                id="place-holder-data-center-video"
                                className=""
                                display="initial"
                                position="relative"
                                allowFullScreen
                                />
                                <p>With Intel SGX enhanced BOINC Solution, our cloud 
                                    computing platform support 
                                    contributors around world with Windows, Mac, Linux systems
                                     as distributed computing node.</p>
                                <Link to="/boinc">
                                    <button>Learn More & Download</button>
                                </Link>
                                
                            </div>

                            < div className = "product-data-center-pc-content2" >
                                <span className="product-data-center-pc-number">02</span>
                                <span className="product-data-center-pc-list-title">  BLOCKCHAIN BASED COMPUTING PLATFORM SUCH AS POUW.</span>
                                < div className = "product-data-center-pc-list-divider" > </div>
                                < Iframe url = "https://www.youtube.com/embed/jrNanjJjWNA"
                                title="place-holder-video"
                                width="425px"
                                height="297px"
                                id="place-holder-data-center-video"
                                className=""
                                display="initial"
                                position="relative"
                                allowFullScreen
                                />
                                <p>
                                    With Intel latest SGX Security and Remote Attestation Tech.Ankr invented 
                                    new consensus protocol Proof of Useful Work to replace PoW.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="product-mobile">
                        <div className="product-mobile-content">
                            <div className="product-mobile-title">
                                <h1>Mobile/Edge Devices</h1>
                            </div>
                            < div className = "product-mobile-divider" > </div>
                            <p className="product-mobile-text">Mobile can be fit most for the large amount small batch process jobs. This will highly leverage ARM TrustZone and potentially expand to solutions related to IoT technology.</p>
                        </div>
                    </div>
                </div>
            </div> 
        );  
    }
}

export default Product;