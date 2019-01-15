import React, { Component } from 'react';

class Boinc extends Component {
    render() {
        return(
            <div>
                {/* Main title */}
                <div className="boinc-header">
                    Ankr Distributed Computing Platform
                </div>

                {/* Boinc Brief */}
                <div className="boinc-brief">
                    <div className="boinc-brief-title"> BOINC brief</div>
                    <div className="boinc-brief-content">
                        <div>
                        <p>
                            BOINC is a platform
                            for high - throughput computing on a large scale(thousands or millions of computers).It can be used
                            for volunteer computing(using consumer devices) or grid computing(using organizational resources).It supports virtualized, parallel, and GPU - based applications.

                            The software development of BOINC helps the unused CPU and GPU cycle on a computer to do scientific computing.It is community - based as well.Everyone is welcome to participate.
                        </p>
                        </div>

                        <div>
                            <div>
                                <h4>
                                    Current Cloud Computing platforms lack incentives model
                                    for people to contribute their resources.
                                </h4>
                            </div>

                            <div className="boinc-brief-divider"> </div>
                            <div>
                                Richard McClintock
                            </div>
                            <div>
                                The Position of Ankr Network
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* solutions */}
                <div>
                    <div>
                        <h1>Problems & Ankr’s resolutions</h1>
                    </div>

                    <div>
                        <div>
                            <div>
                                BOINC lacks incentives to attract end users to contribute computing power
                            </div>

                            <div>
                                Intel Software Guard Extensions(SGX) is a set of central processing unit(CPU) instruction codes 
                                from Intel that allows user - level code to allocate private regions of memory that are protected
                                from processes running at higher privilege levels.We apply this SGX technology to run client application
                                on trusted hardware.
                            </div>
                        </div>

                        <div>
                            <div>
                                BOINC lacks the scheme to protect data privacy
                            </div>

                            <div>
                                Use SGX and remote attestation to ensure the integrity during the computing process
                            </div>
                        </div>

                        <div>
                            <div>
                                BOINC doubles the redundancy as it needs to verify the correctness of the results
                            </div>

                            <div>
                                Normal Bonic applicaitons run the same task twice and compare the output 
                                file to validate the result.SGX - enabled Boinc will validate result by Intel 
                                SGX signature.So each task only runs once.
                            </div>
                        </div>


                    </div>
                </div>

                {/* Results  */}
                <div>
                    <div>
                        <div>
                            Result
                        </div>

                        <div>
                            Current Cloud Computing platforms lack incentives model.
                        </div>
                    </div>

                    <div>
                        <div>
                            We built Windows / Linux client to check the client environment is SGX - enabled or not.
                        </div>

                        <div>
                            We built new SGX validator service to replace old validator.Each task only runs once.
                        </div>
                    </div>
                </div>

                {/* download */}

                <div>
                    <div>
                    Demo Windows Client:
                    </div>

                    <div>
                    <button>Free download</button>
                    </div>

                    <div>
                        Our demo version
                        for Mac OS is coming soon!
                    </div>
                </div>
            </div>
        );
    }
}

export default Boinc;