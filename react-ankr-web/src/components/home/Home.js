import React, { Component } from 'react';
import DemoForm from '../forms/DemoForm';


class Home extends Component {


    render() {
        return(
            <div>
                { /* Main */ }    
                <div>
                    <h1>The Cloud, Trusted</h1>
                    <p>Build a Faster, Cheaper, Securer cloud using idle processing power in data centers and edge devices</p>
                    <DemoForm
   
                        show={this.props.demoShow}
                        onChange={this.props.onDemoChange}
                    />
                </div>


                {/* What's Ankr */}
                <div>
                    <h2>What 's Ankr?</h2>
                    <p>Ankr is a distributed computing platform that aims to leverage
                idle computing resources in data centers and edge devices.What
                Ankr enables is a Sharing Economy model where enterprises and
                consumers can monetize their spare computing capacities from
                their devices, on - premise servers, private cloud and even public
                cloud.This enables Ankr to provide computing power much closer to
                users at a much cheaper price.</p>
                    <button>Watch Video</button>
                </div>

                {/* Why Ankr */}
                <div>
                    <h2>Why Ankr?</h2>

                    <div>
                        <div className ='col-md-3'>
                            <h3>Higher Availbility</h3>

                            <p>Deploy from the closest computing resources available across the
                                globe</p>
                        </div>

                        < div className = 'col-md-3' >
                            <h3>Cheaper Price</h3>

                            <p>Sharing Economy’ s asset - light nature
                                results in fairer pricing</p>
                        </div>

                        < div className = 'col-md-3' >
                            <h3>Easier Integration</h3>
                            <p>Build from the tools and languages
                                you already know</p>
                        </div>

                        < div className = 'col-md-3' >
                            <h3>Securer Communication</h3>
                            <p>Leverage cryptographic primitives and
                                TEEs to protect computation integrity</p>
                        </div>
                    </div>
                </div>

                {/* Use Cases */}
                <div>
                    <h2>Use Cases</h2>

                    <p>Ankr is versatile in various types of computing jobs.</p>

                    <ul>
                        < li > Computation - heavy applications where computation
                        offsets communications</li>
                        <li>Monte Carlo simulations(e.g., medical / geological research)</li>

                        <li>Time - sensitive signal processing offloading(e.g., rendering
                                for AR / VR)</li>

                        <li>Offline data analytics without strict deadlines</li>
                    </ul>
                </div>
                
                {/* Roadmap */}
                <div>
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
            </div>

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
            <div>
                <h2>Latest News</h2>

                <div>
                    <h4>Ankr Network Bi - weekly Update 5</h4>

                    <p>Over the past two weeks, we have made remarkable progress on
                        technology development.Meanwhile we have planned...</p>
                </div>

                <div>
                    <h4>Ankr Network Bi - weekly Update 4</h4>

                    <p>Over the past two weeks, we have been focusing on solutions
                        for utilising idle resources in data centers...</p>
                </div>

                <div>
                    <h4>Ankr Network Bi - weekly Update 3</h4>

                    <p>Welcome to Ankr Bi - weekly!This is our third issue, and
                        we appreciate your attention.First of all, we want to 
                        express...</p>
                </div>
                <button>More News</button>
            </div>
                </div>
        );
    }
}

export default Home;