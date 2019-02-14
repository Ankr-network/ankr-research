import React, { Component } from "react";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";
import bracket from "../../images/bracket.svg";
import f1 from "../../images/f-1.svg";

import '../../scss/TeamForm.css';


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

                <Modal
                    show={this.props.show}
                    onHide={this.props.onChange}
                    dialogClassName="team-form-modal"
                >
                    <Modal.Header closeButton />

                    <Modal.Body>
                        <form className="team-form-main">

                            <div className="team-form-title">Join our team</div>

                            <div className="team-form-divider"></div>

                            <label>We create a culture of fun and collaboration and are looking for dedicated people
                                who want to make a real impact around the world.
                            </label>

                            <div className="team-form-middle">
                                <FormGroup className="team-form-middle-left">
                                    <FormControl
                                        type="text"
                                        placeholder="Your name"
                                        className="team-form-middle-left-item"
                                    />

                                    <FormControl
                                        type="email"
                                        placeholder="Your email address"
                                        className="team-form-middle-left-item"
                                    />

                                    <FormControl
                                        type="text"
                                        placeholder="Your phone number"
                                        className="team-form-middle-left-item"
                                    />
                                </FormGroup>

                                <FormGroup className="team-form-middle-right">
                                    <FormControl componentClass="select" className="team-form-middle-right-item">
                                        <option value="Product Manager">Product Manager</option>
                                        <option value="Business Development Assistant">Business Development Assistant</option>
                                        <option value="Front-end Developer">Front-end Developer</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                    </FormControl>

                                    <FormControl
                                        type="text"
                                        placeholder="Your message"
                                        bsSize="lg"
                                        className="team-form-middle-right-item-message"
                                    />
                                </FormGroup>

                            </div>

                            <div className="team-form-footer">
                                <FormGroup>
                                    <FormControl
                                        type="file"
                                    />
                                </FormGroup>

                                <button className="team-form-send-btn" type="submit">Send Message</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

export default TeamForm;