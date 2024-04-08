import React, { useState } from 'react';

export default function Slider() {
  // State to manage the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle previous slide
  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + 3) % 3; // 3 is the total number of slides
    setActiveIndex(newIndex);
  };

  // Function to handle next slide
  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % 3; // 3 is the total number of slides
    setActiveIndex(newIndex);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
  
    <img className="d-block w-100" src="https://alukas.presslayouts.com/wp-content/uploads/2023/03/home-grid-showcase-slider-3-1.jpg" alt="First slide" style={{ height: '100%' }} />
 
 
</div>


          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img className="d-block w-100" src="https://alukas.presslayouts.com/wp-content/uploads/2023/03/home-grid-showcase-slider-2-1.jpg" alt="Second slide" style={{height:'100%'}} />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img className="d-block w-100" src="https://alukas.presslayouts.com/wp-content/uploads/2023/03/home-grid-showcase-slider-1-1.jpg" alt="Third slide" style={{height:'100%'}} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
        </div>
        <div className='col-sm-2'></div>
      </div>
    </div>
  );
}


