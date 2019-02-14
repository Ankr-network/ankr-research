import React, { Component } from 'react';
import StaffCarousel from '../carousel/StaffCarousel';

import { Staff } from '../../data/staff';
import '../../scss/Team.scss';


class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staff: Staff,
            carouselShow: false,
            staffID: 0
        };
    }

    // event handlers with parameters property initializer
    handleEventChange = (idx) => (e) => {
        e.preventDefault();
        this.setState({ carouselShow: !this.state.carouselShow, staffID: idx });
    }

    handleClick = () => {
        this.setState({ carouselShow: !this.state.carouselShow });
    }

    render() {
        return (
            <div className="core-team-list">
                <ul className="core-team-items">
                    {this.state.staff.map((person, idx) => {
                        return (
                            <li
                                className="core-team-item"
                                key={idx}
                            >
                                <button onClick={this.handleEventChange(idx)}>
                                    <img src={person.img} alt="staff"/>
                                    <h5>{person.name}</h5>
                                </button>
                                <p>{person.title}</p>
                            </li>
                        );
                    })}
                </ul>

                <StaffCarousel id={this.state.staffID} show={this.state.carouselShow} onChange={this.handleClick} />
            </div>

        );
    }
}

export default Team;
