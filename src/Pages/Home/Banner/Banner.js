import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
import banner3 from '../../../images/banner/banner-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        
        <>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 banner-img"
                src= {banner3}
                alt="First slide"
                />
                <Carousel.Caption className="text-position">
                    <h1>Air Conditioner</h1>
                    <h3>Online AC Sale, delivery within 7 days</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner-img"
                src= {banner2}
                alt="Second slide"
                />

                <Carousel.Caption className="text-position">
                    <h1>Air Conditioner</h1>
                    <h3>Online AC Sale, delivery within 7 days</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner-img"
                src= {banner1}
                alt="Third slide"
                />

                <Carousel.Caption className="text-position">
                    <h1>Air Conditioner</h1>
                    <h3>Online AC Sale, delivery within 7 days</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;