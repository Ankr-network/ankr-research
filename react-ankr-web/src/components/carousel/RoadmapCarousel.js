import React, { Component } from 'react';
import { Roadmap } from '../../data/roadmap';
import slideLeft from '../../images/slide-arrow-left-big-new.svg';
import slideRight from '../../images/slide-arrow-right-big-new.svg';
import '../../scss/RoadmapCarousel.css';


class RoadmapCarousel extends Component {
    constructor() {
        super();
        this.state = {
            len: Roadmap.length,
        };
    }

    handleLeftClick = () => {
        if (this.state.len > 4) {
            this.setState({len: this.state.len - 1});
        }
    }

    handleRightClick = () => {
        if (this.state.len < Roadmap.length) {
            this.setState({len: this.state.len + 1});
        }
    }

    render() {
        // get the array to render
        let renderArr = Roadmap.slice(this.state.len - 4, this.state.len);

        return(
           <div className="roadmap-carousel">
               <button
                   onClick={this.handleLeftClick}
                   className="roadmap-carousel-left"
               >
                   <img src={slideLeft} alt="left arrow" />
               </button>

               <div className="roadmap-carousel-items">
                   {renderArr.map((item, idx) => {
                       return(
                           <div className="roadmap-carousel-item">
                               <div key={idx}>
                                   <img
                                       src={item.img}
                                       alt="roadmap-image"
                                       className = "roadmap-carousel-item-img"
                                   />
                                   <div>{item.title}</div>
                                   <div className="roadmap-carousel-item-divider"></div>
                                   <div>{item.description}</div>
                               </div>
                               <div className="roadmap-carousel-items-divider"></div>
                           </div>
                       );
                   })}
               </div>

               <button
                   onClick={this.handleRightClick}
                   className="roadmap-carousel-right"
               >
                   <img src={slideRight} alt="right arrow" />
               </button>

           </div>
       );
    }

    // render() {
    //     return (
    //         <div className="roadmap-carousel">
    //             <Carousel
    //             interval={null}
    //             >
    //             {Roadmap.map((item, idx) =>
    //
    //                 <Carousel.Item
    //                     key={idx}
    //                     active={true}
    //                 >
    //                     <div className = "roadmap-carousel-item" >
    //                         <img
    //                             src={item.img} alt="photos"
    //                             className = "roadmap-carousel-item-img"
    //                         />
    //
    //                         <div className = "roadmap-carousel-item-info" >
    //                             <div className="roadmap-carousel-item-title">{item.title}</div>
    //                             <div className="roadmap-carousel-item-divider"></div>
    //                             <p className="roadmap-carousel-item-desc">{item.description}</p>
    //                         </div>
    //                     </div>
    //                 </Carousel.Item>
    //
    //
    //             )}
    //             </Carousel>
    //         </div>
    //     );
    // }
}

export default RoadmapCarousel;