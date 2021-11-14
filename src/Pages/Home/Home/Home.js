import React from 'react';

import Banner from '../Banner/Banner';
import ContactUs from '../ContactUS/ContactUs';
import Navigation from '../../Shared/Navigation/Navigation';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products/Products';



const Home = () => {
    return (
        <div>
            
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;