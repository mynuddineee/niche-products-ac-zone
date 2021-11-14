import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <>
            <h2>Reviews</h2>
        <div className="container-fluid mt-5 mb-5 ">
            
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <p className="text-center counter-text">250</p>
                    <p className="text-center title-text">Website Reviews</p>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <p className="text-center counter-text">80</p>
                    <p className="text-center title-text">Awards</p>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <p className="text-center counter-text">5000+</p>
                    <p className="text-center title-text">Satisfied Customers</p>

                </div>
            </div>
        </div>
    </>
    );
};

export default Reviews;