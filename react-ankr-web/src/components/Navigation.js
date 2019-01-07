import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import TeamForm from './forms/TeamForm';
import PartnerForm from './forms/PartnerForm';
import DemoForm from './forms/DemoForm';

import logo from '../images/logo-icon.svg';
import '../css/Navigation.css';


class Navigation extends Component {
    render() {
        return(
            <Navbar
                fixedTop={true}
            >
                <Navbar.Header>
                    <img src={logo} alt="ankr-logo"/>
                    <span><strong>Ankr</strong></span>
                </Navbar.Header>

                <Nav>
                    <div className="navbar-tags">
                        <NavItem><Link key={1} to='/'>Home</Link></NavItem>
                        <NavItem><Link key={2} to='/about'>About</Link></NavItem>
                        <NavItem><Link key={3} to='/product'>Product</Link></NavItem>
                        <NavItem><Link key={4} to='/contacts'>Contacts</Link></NavItem>
                    </div>
                    <div className="navbar-forms">
                        <NavItem><TeamForm show={this.props.teamShow} onChange={this.props.onTeamChange} /></NavItem>
                        <NavItem><PartnerForm show={this.props.partnerShow} onChange={this.props.onPartnerChange} /></NavItem>
                        <NavItem><DemoForm show={this.props.demoShow} onChange={this.props.onDemoChange}/></NavItem>
                    </div>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;