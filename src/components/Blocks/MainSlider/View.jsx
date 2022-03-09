import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import sliderPNG from './slider-image.png';
import sliderJPG4 from './slider-image2.jpg';
import rightSVG from '@plone/volto/icons/right-key.svg';
import leftSVG from '@plone/volto/icons/left-key.svg';

const NextArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={rightSVG} size="70px" color="#fff" />
  </Button>
);

const PrevArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={leftSVG} size="70px" color="#fff" />
  </Button>
);

const View = props => {
  return (
    <div
      className="tile view mainslider full-width"
      style={{
        background: `url(${sliderPNG}) center no-repeat`,
      }}
    >
      <Slider
        customPaging={dot => <div />}
        dots={true}
        fade
        dotsClass="slick-dots slick-thumb"
        infinite
        speed={500}
        slidesToShow={5}
        slidesToScroll={5}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        autoplay={true}
        pauseOnHover={true}
        mobileFirst={true}
      >

        <div>
          <div className="slide slide1">
            <h3>Connecting High Speed</h3>
            <h1>Internet</h1>
            <Link to="/internet">Learn about our broadband packages</Link>
          </div>
        </div>

        <div>
          <div className="slide slide2">
            <h3>Offering VOIP</h3>
            <h1>Phone</h1>
            <Link to="/phone">Learn about our phone service</Link>
          </div>
        </div>

        <div>
          <div className="slide slide3">
            <h3>Providing top-notch</h3>
            <h1>Customer Support</h1>
            <Link to="/support">Troubleshooting, Policies, and FAQ</Link>
          </div>
        </div>
        
        <div>
          <div className="slide slide4">
            <h3>Extending and improving your</h3>
            <h1>Business Services</h1>
            <Link to="/services">Network Consulting, Tower Climbing, Web Development</Link>
          </div>
        </div>
        <div>
          <div className="slide slide5">
            <h3>Follow our journey</h3>
            <h1>About Us</h1>
            <Link to="/about">Learn about us</Link>
          </div>
        </div>
      </Slider>

    </div>

  );

};

export default View;
