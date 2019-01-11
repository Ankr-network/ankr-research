import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Roadmap } from '../../data/roadmap';
import '../../css/RoadmapCarousel.css';


class RoadmapCarousel extends Component {

    render() {
        return (
            <div className="roadmap-carousel">
                <Carousel
                interval={null}
                >
                {Roadmap.map((item, idx) =>
                
                    <Carousel.Item
                        key={idx}
                        active={true}
                    >
                        <div className = "roadmap-carousel-item" >
                            <img
                                src={item.img} alt="photos"
                                className = "roadmap-carousel-item-img"
                            />

                            <div className = "roadmap-carousel-item-info" >
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