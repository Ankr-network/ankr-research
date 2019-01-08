import React, { Component } from "react";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";

class DemoForm extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onChange}>REQUEST A DEMO</button>

                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>Request demos</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
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

export default DemoForm;