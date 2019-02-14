import React, { Component } from 'react';
import { Opennings } from "../../data/opennings";
import '../../scss/Opens.scss';


const tableHearder = ["Opening", "Type", "Location"];

class Opens extends Component {
    constructor() {
        super();
        this.state = {
            opens: Opennings,
        };
    }

    render() {
        const tableHeaders = (
            <thead className="opens-headers">
                <tr>
                    {tableHearder.map((item) => {
                        return(
                            <td className="opens-header">{item}</td>
                        );
                    })}
                </tr>
            </thead>
        );

        const tableBody = this.state.opens.map((open, idx) => {
            return (
                <tr
                    key={idx}
                    className="opens-row"
                >
                    <td className="opens-item-title">{open.title}</td>
                    <td className="opens-item-type">{open.type}</td>
                    <td className="opens-item-location">{open.location}</td>
                    <td><button className="opens-send-btn">SEND REQUEST</button></td>
                </tr>
            );
        })


        return (
            <table className="opens-list">
                {tableHeaders}
                <div className="opens-list-divider"></div>
                {tableBody}
            </table>
        );
    }
}

export default Opens;
