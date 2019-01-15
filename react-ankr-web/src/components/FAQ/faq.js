import React, { Component } from 'react';
import faqImg from '../../images/faq-img-1.png';
import '../../scss/faq.css';

class FAQ extends Component {
    constructor() {
        super();
        this.state = {
            wedoShow: false,
            createShow: false,
            disDataCenterShow: false,
            disDeviceShow: false,
            compAdvantShow: false,
            futureShow: false,
        };
    }

    handleWedoClick = () => {
        this.setState({wedoShow: !this.state.wedoShow});
    }

    handleCreateClick = () => {
        this.setState({createShow: !this.state.createShow});
    }

    handleDisDataCenterClick = () => {
        this.setState({disDataCenterShow: !this.state.disDataCenterShow});
    }

    handleDisDeviceClick = () => {
        this.setState({disDeviceShow: !this.state.disDeviceShow});
    }

    handleCompAdvantClick = () => {
        this.setState({compAdvantShow: !this.state.compAdvantShow});
    }

    handleFutureClick = () => {
        this.setState({futureShow: !this.state.futureShow});
    }

    render() {

        return (
            <div className="faq">
                <h1>FAQ</h1>
                <div className="faq-divider"></div>
                <div className="faq-body">

                    <div className="faq-body-divider"></div>

                    <div className="faq-item">
                        <div className="faq-title" onClick={this.handleWedoClick}>
                            <div className="faq-title-item">What we do?</div>
                            <button className="faq-item-btn" onClick={this.handleWedoClick}>
                                {this.state.wedoShow ? '-' : '+'}
                            </button>
                        </div>

                        <div className={this.state.wedoShow ? "faq-content-show" : "faq-content-hide"}>
                            <div className="faq-content-sub">
                                <div className="faq-sub-title"><strong>For consumers:</strong></div>
                                <p>Ankr uses local data centers to offer fast & cheap computation</p>
                            </div>

                            <div className="faq-content-sub">
                                <div className="faq-sub-title"><strong>For small data centers: </strong></div>
                                <p>Ankr offers new revenue stream for under-utilized data centers</p>
                            </div>
                        </div>
                    </div>

                    <div className="faq-body-divider"></div>

                    <div className="faq-item">
                        <div className="faq-title" onClick={this.handleCreateClick}>
                            <div className="faq-title-item">Why we create Ankr?</div>
                            <button className="faq-item-btn" onClick={this.handleCreateClick}>
                                {this.state.createShow ? '-' : '+'}
                            </button>
                        </div>

                        <div className={this.state.createShow ? "faq-content-show" : "faq-content-hide"}>
                            <p className="faq-content-sub">According to research from McKinsey and Stanford, there are nearly total of 70% “non-performing” server asset and 30% of servers (including standard server, hypervisors and VMs) in centers around the world have showed no signs of network, user, connection, memory or CPU activity in six months or more.</p>
                            <p className="faq-content-sub">This is why, in 2018, we launched Ankr a distributed cloud computing platform that allows anyone with a computer to contribute their processing power to scientific researchers and enterprises. In return, participants can be rewarded for their contributions.</p>
                        </div>
                    </div>

                    <div className="faq-body-divider"></div>

                    <div className="faq-item">
                        <div className="faq-title" onClick={this.handleDisDataCenterClick}>
                            <div className="faq-title-item">How Ankr utilize distributed cloud for idle data centers?</div>
                            <button className="faq-item-btn" onClick={this.handleDisDataCenterClick}>
                                {this.state.disDataCenterShow ? '-' : '+'}
                            </button>
                        </div>

                        <div className={this.state.disDataCenterShow ? "faq-content-show" : "faq-content-hide"}>
                            <p className="faq-content-sub">Orchestration and containerization make Ankr distributed cloud computing network easy to integrate with resources from diverse, independent data centers into one homogeneous cloud.</p>
                            <p className="faq-content-sub">Kubernetes is a general-purpose vendor-agnostic orchestration service that makes it easy to deploy containerized applications in any data center.</p>
                            <p className="faq-content-sub">Docker is the de-facto standard technology for containerization of applications into micro-services to be deployed on Kubernetes clusters.</p>
                            <img src={faqImg} />
                        </div>
                    </div>

                    <div className="faq-body-divider"></div>

                    <div className="faq-item">
                        <div className="faq-title" onClick={this.handleDisDeviceClick}>
                            <div className="faq-title-item">How Ankr utilize distributed cloud for idle connected device?</div>
                            <button className="faq-item-btn" onClick={this.handleDisDeviceClick}>
                                {this.state.disDeviceShow ? '-' : '+'}
                            </button>
                        </div>

                        <div className={this.state.disDeviceShow ? "faq-content-show" : "faq-content-hide"}>
                            <div className="faq-content-sub">
                                <div>We take advantage of the peer-to-peer network of computational resource providers and consumers, so that</div>
                                <ul>
                                    <li>Providers and consumers run a daemon to interact with the network</li>
                                    <li>Consumer uploads computational task (e.g., SGX enclave application) to the Ankr network</li>
                                    <li>Providers compete to be assigned the computational task</li>
                                    <li>Select provider executes the task using its computational resources</li>
                                    <li>Consumer verifies the results (e.g., SGX remote attestation) and pays</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="faq-body-divider"></div>

                    <div className="faq-item">
                        <div className="faq-title" onClick={this.handleCompAdvantClick}>
                            <div className="faq-title-item">What are Ankr's major competitive advantages?</div>
                            <button className="faq-item-btn" onClick={this.handleCompAdvantClick}>
                                {this.state.compAdvantShow ? '-' : '+'}
                            </button>
                        </div>

                        <div className={this.state.compAdvantShow ? "faq-content-show" : "faq-content-hide"}>
                            <div className="faq-content-sub">
                                <span className="faq-sub-title"><strong>More Efficiency: </strong></span>
                                <p>With the novel Proof of Useful Work(PoUW) can help existing work-based blockchains to be more environment-friendly and resource-efficient.</p>
                            </div>

                            <div className="faq-content-sub">
                                <span className="faq-sub-title"><strong>More Security: </strong></span>
                                <p>Ankr leverages not only the cryptographic primitives but also trusted hardware design to achieve high integrity and confidentiality</p>
                            </div>

                            <div className="faq-content-sub">
                                <p>More Incentives: Computation contributors not only get rewarded for potentially mining	the blocks, but also get compensated for every instruction executed.</p>
                            </div>
                        </div>
                    </div>

                    <div className="faq-body-divider"></div>

                    <div className="faq-item">
                        <div className="faq-title" onClick={this.handleFutureClick}>
                            <div className="faq-title-item">What's the future of Ankr?</div>
                            <button className="faq-item-btn" onClick={this.handleFutureClick}>
                                {this.state.futureShow ? '-' : '+'}
                            </button>
                        </div>

                        <div className={this.state.futureShow ? "faq-content-show" : "faq-content-hide"}>
                            <div className="faq-content-sub">
                                <div className="faq-sub-title"><strong>Simulations (e.g., Pharma/bio/chemistry Industrial research)</strong></div>
                                <ul>
                                    <li>Transfer few simulation parameters</li>
                                    <li>Simulation engine generates input data and computes results</li>
                                    <li>Transfer simulation results statistics back</li>
                                </ul>
                            </div>

                            <div className="faq-content-sub">
                                <div className="faq-sub-title"><strong>Signal processing (offloading) (e.g., rendering for AR/VR)</strong></div>
                                <ul>
                                    <li>Mobile (battery-powered, resource-constrained) device</li>
                                    <li>Device uploads data to distributed cloud computing nodes</li>
                                    <li>Data center or mesh network of nearby mobile devices compute solution</li>
                                    <li>Device downloads results</li>
                                </ul>
                            </div>

                            <div className="faq-content-sub">
                                <p>Offline data analytics (BOINC-style)</p>
                            </div>
                        </div>
                    </div>

                    <div className="faq-body-divider"></div>
                </div>
            </div>
        );
    }

}

export default FAQ;