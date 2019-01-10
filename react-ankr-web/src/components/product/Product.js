import React, { Component } from 'react';
import ourVision from '../../images/our-vision.png';
import techOverview from '../../images/tech-overview.png';
import bracket from '../../images/bracket.svg';
import { Button } from 'react-bootstrap';
import  '../../css/Product.css';

class Product extends Component {
    render() {
        return(
            <div className="product">
                {/*1st part: "our vision"*/}
                <div className="product-vision">
                    <div>
                    <img className="product-vision-img" src={ourVision} alt="our vision" />
                    </div>

                    <div>
                    <h3 className="product-vision-title">Our Vision</h3>
                    <p className="product-vision-text">Cloud Computing is projected to be a trillion dollar market, yet it is monopolized by some of the largest tech conglomerates in the world. Only these giants can afford the high human capital cost and upfront server costs, but this only results in a higher margin for customers.</p>
                    <p className = "product-vision-text" > We believe we can provide lower the barrier
                    for businesses and consumers around the world to enter the cloud by bring compute resources closer to them at a cheaper price. </p>
                    </div>
                </div>

                {/*2nd part: "Trend for Computing"*/}
                <div className="product-trend">
                    <div>
                    <h1 className="product-trend-title"> Trend for computing </h1>
                    </div>
                    <div className="product-trend-list">
                        <div>
                            <div>01</div>
                            <div>Mainframe Computer</div>
                            <div>IBM, Dell, HP</div>
                        </div>

                        <div>
                            <div>02</div>
                            <div>Colocation Centers</div>
                            <div>Rackspace, DigitalOcean</div>
                        </div>

                        <div>
                            <div>03</div>
                            <div>Public Cloud</div>
                            <div>AWS, Azure</div>
                        </div>

                        <div>
                            <div>04</div>
                            <div>Distributed Cloud</div>
                            <div>Ankr</div>
                        </div>
                    </div>
                </div>

                {/*3rd part: "Technology Overview"*/}
                <div className="product-tech" id="tech_overview">
                    <div>
                        <img className="product-tech-img" src={techOverview} alt="tech overview" />
                    </div>

                    <div>
                    <h1 className="product-tech-title">Technology Overview</h1>
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
                    < div className = "product-major-computing-jobs-text" >
                        < div className = "product-major-computing-jobs-item" >
                            <img className = "product-major-computing-jobs-bracket" src={bracket} />
                            <div>Batch processing</div>
                            <div>EXAMPLE:</div>
                            <div>Elastic Mapreduce, hadoop</div>
                        </div>

                        < div className = "product-major-computing-jobs-item" >
                            <img className = "product-major-computing-jobs-bracket" src={bracket} />
                            <div>Security & Privacy</div>
                            <div>EXAMPLE:</div>
                            <div>Website, API Server, Daemon process</div>
                        </div>

                        < div className = "product-major-computing-jobs-item" >
                            <img className = "product-major-computing-jobs-bracket" src={bracket} />
                            <div>Resource-Efficient framework</div>
                            <div>EXAMPLE:</div>
                            <div>AWS Lambda, Serverless Architecture</div>
                        </div>
                    </div>
                </div>

                {/*5th part: "Data Center"*/}
                <div>
                    <div>
                        <h3>Data Center</h3>
                        <p>Small data center operators can improve the utilization rate for their resources, and thus improve both revenue and maintain a significant profit margin.</p>
                        <p>Ankr would leverage the power of kubernetes to share the resources inside data centers. And also with the help of containers, all three tasks of jobs are suitable to be run in this framework.</p>
                    </div>

                    <div>
                        <h3>Demo will be ready in January 2019</h3>
                        {/*media here: video*/}
                    </div>
                </div>

                {/*6th part: "PC & Mobile/Edge Devices"*/}
                <div>
                    <div className="pc">
                        <h3>PC</h3>
                        <h4>At Ankr, we have two solutions with PC’s computing power, they are:</h4>
                        <div>
                            <div>01 BOINC PLATFORM</div>
                            <div>BOINC is an centralized volunteer-based computing platform and is very suitable for batch processing.</div>
                            <Button>Demo is Ready</Button>
                        </div>

                        <div>
                            <div>02 BLOCKCHAIN BASED COMPUTING PLATFORM SUCH AS POUW.</div>
                            <div>This is a platform best fit for event driven job or less intense batch processing because of the limitation of Intel SGX.</div>
                            <Button>Demo is Ready</Button>
                        </div>

                    </div>

                    <div className="mobile">
                        <h3>Mobile/Edge Devices</h3>
                        <div>Mobile can be fit most for the large amount small batch process jobs. This will highly leverage ARM TrustZone and potentially expand to solutions related to IoT technology.</div>
                    </div>
                </div>
            </div> 
        );  
    }
}

export default Product;