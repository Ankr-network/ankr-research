import React, { Component } from 'react';

import { Button } from 'react-bootstrap';


class Product extends Component {
    render() {
        return(
            <div className="product">
                {/*1st part: "our vision"*/}
                <div className="vision">
                    <h3>Our Vision</h3>
                    <p>Cloud Computing is projected to be a trillion dollar market, yet it is monopolized by some of the largest tech conglomerates in the world. Only these giants can afford the high human capital cost and upfront server costs, but this only results in a higher margin for customers.</p>
                    <p>We believe we can provide lower the barrier for businesses and consumers around the world to enter the cloud by bring compute resources closer to them at a cheaper price.</p>
                </div>

                {/*2nd part: "Trend for Computing"*/}
                <div className="trend">
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

                {/*3rd part: "Technology Overview"*/}
                <div className="tech_overview" id="tech_overview">
                    <h3>Technology Overview</h3>
                    <h4>Ankr's innovations include:</h4>
                    <ul>
                        <li>Resource discovery and repurposing for containerized microservices</li>
                        <li>Dynamic pricing marketplace for using idle capacities</li>
                        <li>Seamless support for building applications using Trusted Execution Environment</li>
                        <li>Blockchain-native tokens for off-chain computation, micropayment, fulfillment and transaction settlement</li>
                    </ul>
                </div>

                {/*4th part: "Three major types of computing jobs solved"*/}
                <div>
                    <h3>Three major types of computing jobs solved</h3>
                    <h4>by the existing Cloud providers</h4>
                    <div>
                        <div>Batch processing</div>
                        <div>EXAMPLE:</div>
                        <div>Elastic Mapreduce, hadoop</div>
                    </div>

                    <div>
                        <div>Security & Privacy</div>
                        <div>EXAMPLE:</div>
                        <div>Website, API Server, Daemon process</div>
                    </div>

                    <div>
                        <div>Resource-Efficient framework</div>
                        <div>EXAMPLE:</div>
                        <div>AWS Lambda, Serverless Architecture</div>
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