import React, { Component } from "react";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";
import closeBtn from '../../images/modal-close-icon.png';
import '../../css/DemoForm.css';

class DemoForm extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onChange}>REQUEST A DEMO</button>

                <Modal
                    show={this.props.show}
                    dialogClassName="demo-form-modal"
                >

                    <Modal.Body>
<<<<<<< HEAD
                        <form onSubmit = {this.props.handleSubmit} >
                            <label>Learn how you can leverage distributed computing network in your organization</label>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Your name"
                                    name = 'senderName'
                                    onChange = {this.props.handleChange}
                                />

                                <FormControl
                                    type="email"
                                    placeholder="Your email address"
                                    name = 'senderEmail'
                                    onChange = {this.props.handleChange}
                                />

                                <FormControl
                                    type="number"
                                    placeholder="Your phone number"
                                    name = 'senderPhone'
                                    onChange = {this.props.handleChange}
                                />

                                <FormControl
                                    type="text"
                                    placeholder="Your position"
                                    name = "jobTitle"
                                    onChange = {this.props.handleChange}
                                />
                            </FormGroup>
                            <FormGroup bsSize="large" >
                                <FormControl
                                    type="text"
                                    placeholder="Your message"
                                    name = "message"
                                    onChange={this.props.handleChange}
                                />
                            </FormGroup>

                            <Button type="submit">Send Message</Button>
=======
                        < form
                            onSubmit = {this.handleSubmit}
                            className="demo-form-main"
                        >
                            <button className="demo-form-close-btn" onClick={this.props.onChange}>
                                <img src={closeBtn}/>
                            </button>
                            <div className="demo-form-title">Request demos</div>
                            <div className="demo-form-divider"></div>
                            <label>Learn how you can leverage distributed computing network in your organization</label>

                            <div className="demo-form-middle">
                                <FormGroup className="demo-form-middle-left">
                                    <FormControl
                                        type="text"
                                        placeholder="Your name"
                                        className="demo-form-middle-left-item"
                                    />

                                    <FormControl
                                        type="email"
                                        placeholder="Your email address"
                                        className="demo-form-middle-left-item"
                                    />

                                    <FormControl
                                        type="text"
                                        placeholder="Your phone number"
                                        className="demo-form-middle-left-item"
                                    />
                                </FormGroup>

                                <FormGroup
                                    onChange={this.handleChange}
                                    className="demo-form-middle-right"
                                >
                                    <FormControl
                                        type="text"
                                        placeholder="Your position"
                                        className="demo-form-middle-right-item"
                                    />
                                    <FormControl
                                        type="text"
                                        placeholder="Your message"
                                        className="demo-form-middle-right-item-message"
                                    />
                                </FormGroup>
                            </div>

                            <div className="demo-form-send-btn">
                                <button  type="submit">Send Message</button>
                            </div>

>>>>>>> ace55d09fceb95761c71eaa54147bbeb44c51477
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

export default DemoForm;