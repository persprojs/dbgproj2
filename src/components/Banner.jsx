// src/components/Banner.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/Banner.css'; // Import your custom styles

const Banner = () => {
  return (
    <Carousel interval={2000}> {/* Set the interval to 3000 milliseconds (3 seconds) */}
      <Carousel.Item>
        <div className="banner-container">
          <img
            className="d-block banner-img"
            src="src/assets/Banner-img1.png"
            alt="Homeopathy Store - Dr Reckeweg, SBL, Adel, Schwabe, Wheezal, Bakson, Allen, Bjain, Haslab, Lords, Medisynth, Dr. Willmar Schwabe"
          />
        </div>
        <Carousel.Caption>
          <h3></h3>
          <p>We believe in Creating Happy Customers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="banner-container">
          <img
            className="d-block banner-img"
            src="src/assets/Banner-img2.png"
            alt="Ayurveda Store - Dabur, Baidyanath, Zandu, Himalaya, Patanjali, Hamdard, Charak, Dr. Vaidya's, Kottakkal, Kerala Ayurveda, Aimil, Jiva, Maharishi Ayurveda"
          />
        </div>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
