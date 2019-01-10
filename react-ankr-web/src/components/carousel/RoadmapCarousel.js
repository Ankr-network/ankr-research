import React, { Component } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import { Roadmap } from '../../data/roadmap';
import '../../css/RoadmapCarousel.css';


class RoadmapCarousel extends Component {

    render() {
        return (
            <div>
                <Carousel
                interval={null}
                defaultActiveIndex={this.props.id}
                className="roadmap-carousel"
                >
                {Roadmap.map((item, idx) =>
                
                    <Carousel.Item
                        key={idx}
                    >
                        < div className = "roadmap-carousel-item" >
                            <img
                                src={item.img} alt="photos"
                                className = "roadmap-carousel-item-img"
                            />

                            < div className = "roadmap-carousel-item-info" >
                                <div className="roadmap-carousel-item-title">{item.title}</div>
                                <div className="roadmap-carousel-item-divider"></div>
                                <p className="roadmap-carousel-item-desc">{item.description}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    
               
                )}
                </Carousel>
            </div>
        );
    }
}

export default RoadmapCarousel;