import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Product from './components/product/Product';
import Contacts from './components/contacts/Contacts';
import Navigation from './components/Navigation';
import FAQ from './components/FAQ/faq';
import Boinc from './components/boinc/Boinc';
import Footer from './components/Footer';

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


class App extends Component {
  constructor() {
    super();

    this.state = {
      teamFormShow: false,
      partnerFormShow: false,
      demoFormShow: false,
      message: '',
      template: 'template_C0GJPd8I',
      senderEmail: '',
      senderName: '',
      senderPhone: '',
      jobTitle: '',
      form: '',
    }
  }

  // Functions handle teamForm show or hide
  handleTeamForm = () => {
    this.setState({ teamFormShow: !this.state.teamFormShow });
  }

  // Functions handle partnerForm show or hide
  handlePartnerForm = () => {
    this.setState({ partnerFormShow: !this.state.partnerFormShow });
  }

  // Functions handle demoForm show or hide
  handleDemoForm = () => {
    this.setState({demoFormShow: !this.state.demoFormShow});
  }

  sendFeedback = (templateId, senderEmail, senderName, senderPhone, jobTitle, message, form) => {
    console.log('sending message...');
    if (this.state.file) {
        window.emailjs.sendForm('contact', templateId, form)
    }
    window.emailjs
      .send('contact', templateId, {
        senderEmail,
        senderName,
        senderPhone,
        message,
        jobTitle
      });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('sending message...')
    this.sendFeedback(
      this.state.template,
      this.state.senderEmail,
      this.state.senderName,
      this.state.senderPhone,
      this.state.jobTitle,
      this.state.message,
      this.state.file
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation
              teamShow={this.state.teamFormShow}
              partnerShow={this.state.partnerFormShow}
              demoShow={this.state.demoFormShow}
              onTeamChange={this.handleTeamForm}
              onPartnerChange={this.handlePartnerForm}
              onDemoChange={this.handleDemoForm}
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}
              handleSubmitWithFile = {this.handleSubmitWithFile}
          />

          <Route path='/' exact render={(props) => <Home {...props} 
            demoShow={this.state.demoFormShow} 
            onDemoChange={this.handleDemoForm} 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}

            />} />
          <Route path='/about' component={About} />
          <Route path='/product' component={Product} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/faq' component={FAQ} />
          <Route path='/boinc' component={Boinc} />

          <Footer
            teamShow={this.state.teamFormShow}
            partnerShow={this.state.partnerFormShow}
            onTeamChange={this.handleTeamForm}
            onPartnerChange={this.handlePartnerForm}

            
          />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
