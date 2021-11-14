import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';


const ManageAllOrders = () => {

    
    const [myOrders, setMyOrders] = useState([]);
    const [status, setStatus] = useState('');
    const {user} = useAuth();
    const email = user.email

    const handleStatus = (e) => {

        setStatus(e.target.value);

    }

    
    useEffect( () => {

        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setMyOrders(data));
    },[])

    const handleUpdate = (id)=> {

        fetch(`http://localhost:5000/updateStatus/${id}`,{

            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({status})
        });



    }

    const handleDelete = (id) => {
        const url = `http://localhost:5000/deleteOrder/${id}`;
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
            <h2 className="my-4">Manage Orders:{myOrders?.length}</h2>
                    
            <div className="services">
                <div className="row ">
                {myOrders?.map((myOrder) => (<div className="col" key ={myOrder?._id}>
                    
                    <div className="service border border p-3">
                        <div className="services-img ">
                        <img className="w-50" src={myOrder?.imgUrl} alt="" />
                        </div>

                        <h6  >{myOrder?.productName}</h6>
                        
                        <p>{myOrder?.description}</p>
                        <h4 className="text-primary"> Quantity :{myOrder?.quantity}</h4>
                        <h4 className="text-primary"> Price :{myOrder?.price} Taka</h4>
                        <h6 className="text-danger"> User:{myOrder?.name} </h6>
                        <h6 className="text-danger"> Email:{myOrder?.email} </h6>
                       
                        <h6 className="text-danger"> Status: <input onChange={handleStatus} type="text" defaultValue={myOrder?.status}/> </h6>

                        <button
                        onClick={() => handleUpdate(myOrder?._id)}
                        className="btn btn-danger my-2"
                        >
                        Update
                        </button><br/>
                        <button
                        onClick={() => handleDelete(myOrder?._id)}
                        className="btn bg-danger"
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

export default ManageAllOrders;