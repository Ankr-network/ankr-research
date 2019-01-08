import React, { Component } from "react";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";
import bracket from "../../images/bracket.svg";
import f2 from "../../images/f-2.svg";
import '../../css/PartnerForm.css';


class PartnerForm extends Component {
    render() {
        return (
            <div>
                <button className={this.props.navBar ? "partner-form-btn" : "footer-partner-form-btn"} onClick={this.props.onChange}>
                    <div className={this.props.navBar ? "partner-form-logo" : "footer-partner-form-logo"}>
                        <img className="footer-forms-btn-right-bracket" src={bracket} alt="logo bracket" />
                        <img className="footer-forms-btn-f2" src={f2} alt="partner logo" />
                    </div>
                    <div className={this.props.navBar ? "partner-form-info" : "footer-partner-form-info"}>
                        <div className={this.props.navBar ? "partner-form-info-title" : "footer-partner-form-info-title"}>
                            <span className={this.props.navBar ? "fas fa-plus" : "none-navbar-partner-form"}><strong>BECOME A PARTNER</strong></span>
                        </div>
                        <div className={this.props.navBar ? "partner-form-desc" : "footer-partner-form-desc"}>Expand your business with us</div>
                    </div>
                </button>

                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>Become a partner</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <label>Explore Ankr ecosystem for the right opportunities and networks to help you achieve business success.</label>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Your name"
                                />

                                <FormControl
                                    type="email"
                                    placeholder="Your email address"
                                />

                                <FormControl
                                    type="text"
                                    placeholder="Your phone number"
                                />

                                <FormControl
                                    type="text"
                                    placeholder="Your position"
                                />

                                <FormControl
                                    type="text"
                                    placeholder="Your company"
                                />

                                <FormControl
                                    type="text"
                                    placeholder="Your company website"
                                />
                            </FormGroup>

                            <FormGroup bsSize="large">
                                <FormControl
                                    type="text"
                                    placeholder="Your message"
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormControl
                                    type="file"
                                />
                            </FormGroup>

                            <Button type="submit">Send Message</Button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.onChange}>Close</Button>
                    </Modal.Footer>
                </Modal>



            </div>
        );
    }

}

export default PartnerForm;