import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({item}) => {

    const {img, name, description} = item;
    return (
        <div>
            <div className="container-fluid ">

                <div className="row g-4  ">
                        <div className="col  my-4 " style={{ height: "80vh" }}>
                            <div className="card h-100">
                            <img  style={{ height: "70vh" }}   src={img} className="card-img-top card-img " alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Name: {name}</h5>
                                <h6 className="card-text">Description: {description}</h6>
                                
                                
                                <br/>
                                <Link to={`/purchase/${item._id}`}>
                                    <button className="btn btn-primary " type="">Place Order</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        
    );
};

export default Product;