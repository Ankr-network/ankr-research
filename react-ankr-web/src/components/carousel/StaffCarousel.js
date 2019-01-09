import React, { Component } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import { Staff } from '../../data/staff';
import '../../css/StaffCarousel.css';


class StaffCarousel extends Component {

    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.onChange}
                    dialogClassName="staff-carousel-modal"
                >
                    <Modal.Header closeButton />

                    <Modal.Body>
                        <Carousel
                            interval={null}
                            defaultActiveIndex={this.props.id}
                            className="staff-carousel"
                        >
                            {Staff.map((item, idx) =>
                                <Carousel.Item
                                    key={idx}
                                >
                                    <div className="staff-carousel-item">
                                        <img
                                            src={item.img} alt="photos"
                                            className="staff-carousel-item-img"
                                        />

                                        <div className="staff-carousel-item-info">
                                            <div className="staff-carousel-item-name">{item.name}</div>
                                            <div className="staff-carousel-item-title">{item.title}</div>
                                            <div className="staff-carousel-item-divider"></div>
                                            <p className="staff-carousel-item-desc">{item.description}</p>
                                        </div>
                                    </div>
                                </Carousel.Item>)}
                        </Carousel>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default StaffCarousel;