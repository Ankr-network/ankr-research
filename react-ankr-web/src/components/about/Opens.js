import React, { Component } from 'react';
import { Opennings } from "../../data/opennings";
import '../../css/Opens.css';

class Opens extends Component {
    constructor() {
        super();
        this.state = {
            opens: Opennings,
        };
    }

    render() {
        return (
            <ul className="opens-list">
                {this.state.opens.map((open, idx) => {
                    return (
                        <li
                            key={idx}
                            className="opens-item"
                        >
                            <div className="opens-item-body">
                                <span className={`opens-item-${idx}-title`}>{open.title}</span>
                                <span className={`opens-item-${idx}-type`}>{open.type}</span>
                                <span className={`opens-item-${idx}-local`}>{open.location}</span>
                                <button className="opens-send-btn">SEND REQUEST</button>
                            </div>
                            <div className="opens-item-body-divider"></div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Opens;
