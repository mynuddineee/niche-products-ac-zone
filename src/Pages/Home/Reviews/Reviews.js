import Rating from 'react-rating';
import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( () => {

        fetch('https://afternoon-wildwood-28226.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))


    },[])
    return (
        <>
            <h2>Reviews</h2>
            <div className="container-fluid mt-5 mb-5 ">
                
                <div className="row">
                    {

                        reviews?.map((review) => <div className="col-lg-4 col-sm-12" key ={review?._id}>
                        <p className="text-center counter-text">{review?.rating}</p>
                        <Rating
                            initialRating = {review?.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                            >
                        </Rating>
                        <p className="text-center title-text">Website Reviews</p>
                        
                    </div>)
                    }
                    
                </div>
            </div>
        </>
    );
};

export default Reviews;