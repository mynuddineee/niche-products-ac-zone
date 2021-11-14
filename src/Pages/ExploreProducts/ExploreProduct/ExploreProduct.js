import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ExploreProduct = ({explore}) => {
    const {img, name, description, price} = explore;
    return (
        <div>
            <div className="container-fluid">
                <div className="row g-4">
                        <div className="col  my-4">
                            <div className="card ">
                            <img  src={img} className="img-fluid " alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Name: {name}</h5>
                                <h6 className="card-text">Description: {description}</h6>
                                <h6 className="card-text">Price: {price} Taka</h6>
                                
                                
                                <br/>
                                <Link to={`/purchase/${explore._id}`}>
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

export default ExploreProduct;