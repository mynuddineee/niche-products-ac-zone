import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/addReview', data)
        .then(res => {

            if(res.data.insertedId){

                alert('inserted data successfully');
                reset();
            }
        })
    }
    return (

        <>
        <Navigation></Navigation>
        <div>
            <h2 className=" mb-4 mt-2">Add Your Review Here</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            
           
            <select className="place-order" {...register("rating")}>
                <option value="0">Worst</option>
                <option value="1">Very Bad</option>
                <option value="2">Bad</option>
                <option value="3">Good</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
                
            </select><br/>
            
            
            
            
            <input type="submit" value="Add Review" className="place-button bg-success mb-4 mt-2 " />
      </form>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Review;