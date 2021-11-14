import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import './ExploreProducts.css';

const ExploreProducts = () => {
    const [explores, setExplores] = useState([]);

    useEffect( () => {

        fetch('http://localhost:5000/explores')

        .then(res => res.json())
        .then(data => setExplores(data));

    },[])
    return (
        <div>
            <Navigation></Navigation>
            <h2>Explore  Products</h2>
            <div className="container">
                {
                    explores?.map(explore => <ExploreProduct
                    
                        key ={explore._id}
                        explore = {explore}
                    
                    
                    ></ExploreProduct>)
                }
            
                
            </div>

            
                
            <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;