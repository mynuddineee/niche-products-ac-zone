import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/addProduct', data)
        .then(res => {

            if(res.data.insertedId){

                alert('inserted data successfully');
                reset();
            }
        })
    }
    return (
        <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("img")} placeholder="Image Url" className="place-order"/><br/>
          <input  {...register("name")} placeholder="Product Name" className="place-order"/><br/>
          <input  {...register("description")} placeholder="Product Description" className="place-order"/><br/>
          <input  {...register("origin")} placeholder="Origin" className="place-order"/><br/>
          <input type="number" {...register("price")} placeholder="Price" className="place-order"/><br/>
          
          <input  {...register("address")} placeholder="Address" className="place-order"/><br/>
          <input type="number" {...register("quantity")} placeholder="Quantity" className="place-order"/><br/>
          
          
         
          <input type="submit" value="Add Product" className="place-button bg-success " />
      </form>
    </div>

    );
};

export default AddProducts;