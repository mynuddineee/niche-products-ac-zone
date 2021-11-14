import React, { useEffect, useState } from 'react';

import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const ManageProducts = () => {

    const [myOrders, setMyOrders] = useState([]);
    
    

    
    useEffect( () => {

        fetch('https://afternoon-wildwood-28226.herokuapp.com/explores')
        .then(res => res.json())
        .then(data => setMyOrders(data));
    },[])

    const handleDelete = (id) => {
        const url = `https://afternoon-wildwood-28226.herokuapp.com/deleteProduct/${id}`;
        fetch(url, {

            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('Deleted');
                const remaining = myOrders.filter(myOrder => myOrder._id !== id);
                console.log(remaining);
                setMyOrders(remaining);
            
            }
          });
        console.log(id);
      };
    return (
        <div>
            <Navigation></Navigation>
            <h2 className="my-4">All Products:{myOrders?.length}</h2>
                    
            <div className="services">
                <div className="row ">
                {myOrders?.map((myOrder) => (<div className="col-4" key ={myOrder?._id}>
                    
                    <div className="service border border p-3">
                        <div className="services-img ">
                        <img className="w-50" src={myOrder?.img} alt="" />
                        </div>

                        <h6  >{myOrder?.productName}</h6>
                        
                        <p>{myOrder?.description}</p>
                        <h3 className="text-danger"> Quantity :{myOrder?.quantity}</h3>
                        <h3 className="text-danger"> Price :{myOrder?.price} Taka</h3>

                        <button
                        onClick={() => handleDelete(myOrder?._id)}
                        className="btn btn-danger"
                        >
                        Delete
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default ManageProducts;