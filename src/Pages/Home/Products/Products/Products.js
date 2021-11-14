import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {

        fetch('https://afternoon-wildwood-28226.herokuapp.com/products')

        .then(res => res.json())
        .then(data => setItems(data));

    },[])
    return (
        <div className="my-4">
            <h2>Our Products</h2>
            <div className="container">
                {
                    items?.slice(0,6)?.map(item => <Product
                    
                        key ={item._id}
                        item = {item}
                    
                    
                    ></Product>)
                }
            
                
            </div>
               
        </div>
    );
};

export default Products;