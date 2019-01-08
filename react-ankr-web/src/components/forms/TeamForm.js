import React, { Component } from "react";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";
import bracket from "../../images/bracket.svg";
import f1 from "../../images/f-1.svg";

import '../../css/TeamForm.css';


class TeamForm extends Component {

    render() {
        return (
            <div className="teamForm">
                <button className={this.props.navBar ? "team-form-btn" : "footer-team-form-btn"} onClick={this.props.onChange}>
                    <div className={this.props.navBar ? "team-form-logo" : "footer-team-form-logo"}>
                        <img className="footer-forms-btn-left-bracket" src={bracket} alt="logo bracket" />
                        <img className="footer-forms-btn-f1" src={f1} alt="join logo"/>
                    </div>
                    <div className={this.props.navBar ? "team-form-info" : "footer-team-form-info"}>
                        <div className={this.props.navBar ? "team-form-info-title" : "footer-team-form-info-title"}>
                            <span className={this.props.navBar ? "fab fa-staylinked" : "none-navbar-fa"}><strong>JOIN OUR TEAM</strong></span>
                        </div>
                        <div className={this.props.navBar ? "team-form-desc" : "footer-"}>Build next-generation products with us</div>
                    </div>
                </button>

                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>Join our team</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit = {this.props.handleSubmit}>
                            <label>We create a culture of fun and collaboration and are looking for dedicated people
                                who want to make a real impact around the world.
                            </label>

                            <FormGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Your name"
                                    name = "senderName"
                                />

                                <FormControl
                                    type="email"
                                    placeholder="Your email address"
                                    name = "senderEmail"
                                />

                                <FormControl
                                    type="text"
                                    placeholder="Your phone number"
                                    name = "senderPhone"
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormControl 
                                componentClass="select"
                                name = 'jobTitle'>
                                    <option value="Product Manager">Product Manager</option>
                                    <option value="Business Development Assistant">Business Development Assistant</option>
                                    <option value="Front-end Developer">Front-end Developer</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                </FormControl>
                            </FormGroup>

                            <FormGroup bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder="Your message"
                                    name = "message"
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormControl
                                    type="file"
                                    name = "form"
                                />
                            </FormGroup>

                            <Button type="submit">Send Message</Button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.onChange} >Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default TeamForm;