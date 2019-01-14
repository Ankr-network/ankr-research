import React, { Component } from 'react';
import { Opennings } from "../../data/opennings";
import '../../css/Opens.css';


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
                            <th>{item}</th>
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
                <thead>{tableHeaders}</thead>
                <div className="opens-list-divider"></div>
                <tbody>{tableBody}</tbody>
            </table>
        );
    }
}

export default Opens;
