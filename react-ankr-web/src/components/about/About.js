import React, { Component } from 'react';
import {FormGroup, FormControl, Button, Modal} from 'react-bootstrap';


import Team from './Team';
import Opens from './Opens';


class About extends Component {


    render(){
        return(
            <div className="about"> 
                {/**First part of About, named "change_world" */}
                <div className="change_world">
                    <h2>We Dare to Change the World</h2>
                    <p>Building a better cloud is never an easy task, but we believe we are paving the way for 
                        a more open cloud ecosystem where businesses and consumers across the world can interconnect 
                        and benefit.</p>

                    <div>
                        <div>
                            {/*<img src="" alt="" /> */}
                            <h4>Build</h4>
                            <div>Build a resource-efficient blockchain framework</div>
                        </div>
                        <div>
                            {/*<img src="" alt="" /> */}
                            <h4>Connect</h4>
                            <div>Connect the computing power across the world</div>
                        </div>
                        <div>
                            {/*<img src="" alt="" /> */}
                            <h4>Evolve</h4>
                            <div>Continue improving and pushing our limits</div>
                        </div>
                    </div>
                </div>

                {/**Second part of About page, named "story" */}
                <div className="story">
                    <h2>Our story</h2>
                    <p>"I believe that cloud computing should be ubiquitous in the near future, but it’s currently monopolized 
                        by tech giants. High margins are charged against users due to high infrastructure and human capital costs.</p>
                    <p>There should be a way for researchers, students, and startups to access affordable cloud computing that
                            isn’t centralized. Therefore, I founded Ankr together with Stanley Wu and Ryan Fang.</p>
                    <p>Stanley was my mentor during my internship. As for Ryan, our mutual trust established gradually 
                        throughout our college career.</p>
                    <p>We were roommates for four years, and I witnessed how he progressed from an ambitious freshman to a 
                        competent investment baking analyst.</p>
                    <p>Our goal is to make this team a family and keep pushing our boundaries to realize our ultimate goal: 
                        making the blockchain token model accessible, and decentralized cloud computing an everyday reality."</p>
                    <div>
                        <div>
                            <div>Chandler Song</div>
                            {/*Ankr Logo & Song's Title */}
                        </div>
                        <div className="signature-song">{/*<img src="" alt="chandler signature" /> */}</div>
                    </div>
                </div>

                {/*Third Part of About page, named "team"*/}
                <h2>Core Team</h2>
                <Team />

                {/*Fourth part of About page, named "backed_by", get images and make a table*/}
                <div className="backed_by">
                    <h2>Backed by</h2>
                </div>

                {/*Fifth part of About page, named "benefits"*/}
                <div className="benefits">
                    <h2>Benefits</h2>
                    <div>
                        <h5>01 Awesome Work Spaces</h5>
                        <p>Enjoy working with the team in prime locations in San Francisco and Shanghai</p>
                    </div>

                    <div>
                        <h5>02 Health Insurance</h5>
                        <p>Take advantage of generous wellness incentives to stimulate productivity and growth in the workplace</p>
                    </div>

                    <div>
                        <h5>03 Paid Vacation</h5>
                        <p>Utilize our flexible open vacation policy to take time off when you need it</p>
                    </div>
                </div>

                {/*Sixth part of About page, named "open_positions"*/}
                <div className="open_positions">
                    <Opens />
                </div>
            </div> 
        );   
    }
}

export default About;