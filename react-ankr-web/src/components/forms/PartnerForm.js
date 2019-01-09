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

                <Modal
                    show={this.props.show}
                    onHide={this.props.onChange}
                    dialogClassName="partner-form-modal"
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <form className="partner-form-main">
                            <div className="partner-form-title">Become a partner</div>
                            <div className="partner-form-divider"></div>
                            <label>Explore Ankr ecosystem for the right opportunities and networks to help you achieve business success.</label>

                            <div className="partner-form-middle">
                                <FormGroup className="partner-form-middle-left">
                                    <FormControl
                                        type="text"
                                        placeholder="Your name"
                                        className="partner-form-middle-left-item"
                                    />

                                    <FormControl
                                        type="email"
                                        placeholder="Your email address"
                                        className="partner-form-middle-left-item"
                                    />

                                    <FormControl
                                        type="text"
                                        placeholder="Your phone number"
                                        className="partner-form-middle-left-item"
                                    />

                                    <FormControl
                                        type="text"
                                        placeholder="Your position"
                                        className="partner-form-middle-left-item"
                                    />
                                </FormGroup>

                                <FormGroup className="partner-form-middle-right">
                                    <FormControl
                                        type="text"
                                        placeholder="Your company"
                                        className="partner-form-middle-right-item"
                                    />
                                    <FormControl
                                        type="text"
                                        placeholder="Your company website"
                                        className="partner-form-middle-right-item"
                                    />
                                    <FormControl
                                        type="text"
                                        bsSize="lg"
                                        placeholder="Your message"
                                        className="partner-form-middle-right-item-message"
                                    />
                                </FormGroup>
                            </div>

                            <div className="partner-form-footer">
                                <FormGroup>
                                    <FormControl
                                        type="file"
                                    />
                                </FormGroup>

                                <div className="partner-form-send-btn">
                                    <button  type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>



            </div>
        );
    }

}

export default PartnerForm;