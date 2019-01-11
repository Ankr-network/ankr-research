import React from "react";
import { FormGroup, Button, FormControl } from 'react-bootstrap';
import '../../css/ContactsForm.css';

class ContactForm extends React.Component {
    render() {
        return (
            <div className="contacts-form-body">
                <h2>Write to us</h2>
                <div className="contacts-form-body-divider"></div>
                <form>
                    <FormGroup>
                        <FormControl
                            type="text"
                            placeholder="Your name"
                            className="contacts-form-body-form-item"
                        />

                        <FormControl
                            type="email"
                            placeholder="Your email address"
                            className="contacts-form-body-form-item"
                        />

                        <FormControl
                            type="text"
                            placeholder="Your phone number"
                            className="contacts-form-body-form-item"
                        />

                        <FormControl
                            type="text"
                            placeholder="Your message"
                            bsSize="large"
                            className="contacts-form-body-form-message"
                        />
                    </FormGroup>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        );
    }

}

export default ContactForm;