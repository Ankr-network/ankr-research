import React from "react";
import { FormGroup, Button, FormControl } from 'react-bootstrap';

class ContactForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Write to us</h2>
                <form>
                    <label>Learn how you can leverage distributed computing network in your organization</label>
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
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <FormControl
                            type="text"
                            placeholder="Your message"
                        />
                    </FormGroup>

                    <Button type="submit">Send Message</Button>
                </form>
            </div>
        );
    }

}

export default ContactForm;