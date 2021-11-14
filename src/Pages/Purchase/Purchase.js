import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";

import { useParams } from 'react-router-dom';

import axios from 'axios';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';


//import { getStoredCart } from '../../utlities/cartData';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Purchase = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let { purchaseId } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const [singleProducts, setSingleProducts] = useState({});
    const { user } = useAuth();
    const initialInfo = {name: user.displayName, email: user.email, address: '', contactNumber: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);


    const {handleOnBlur} = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...orderInfo};
        newInfo[field] = value;
        setOrderInfo(newInfo);
       

    }
    useEffect(() =>{

        fetch('https://afternoon-wildwood-28226.herokuapp.com/products')
        
        .then((res) => res.json())
        .then((data) => setProductDetails(data));
       

    },[]);

    useEffect(() =>{

        const exactProducts = productDetails.find((productDetail) => productDetail._id === purchaseId);

        
        setSingleProducts(exactProducts );

    },[productDetails]);


    const { register, handleSubmit, reset, } = useForm();
    
    
    const onSubmit = data => {

    data.status = 'pending';


       
        //const savedCart = getStoredCart();
       //data.order = savedCart;
      axios.post('https://afternoon-wildwood-28226.herokuapp.com/orders', data)
     .then(res => {

            if(res.data.insertedId){

               alert('inserted data successfully');
               
             reset();
            }
        })
    };
    return (
        <div>
            <Navigation></Navigation>

            <div className="col-6 ">
                
                  
                  <h3 className="text-primary pb-4">Product Name: {singleProducts?.name}</h3>
                  

                  <Button onClick={handleOpen} variant="contained">Product Details</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Name: {singleProducts?.name}
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Description: {singleProducts?.description}
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Price: {singleProducts?.price} Taka
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Quantity: {singleProducts?.quantity}
                        </Typography>
                        
                        </Box>
                    </Modal>

                </div>
                

                <div className="col-6 place-form">
                <h3>Please Place an Order</h3>
                
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} placeholder="Name" onBlur={handleOnBlur} className="place-orders"/><br/><br/>

                <input defaultValue={user.email} {...register("email")} placeholder="Email" onBlur={handleOnBlur}  className="place-orders"/><br/><br/>

                <textarea {...register("address")} rows="4" cols="22" placeholder="Address" onBlur={handleOnBlur} className="place-orders" /><br/><br/>

                <input type="number" {...register("contactNumber")} placeholder="Contact Number" onBlur={handleOnBlur} className="place-orders"/><br/><br/>

                <input defaultValue={singleProducts?.name} {...register("productName", { required: true })} placeholder="Product Name"  className="place-orders"/><br/><br/>

                <input defaultValue={singleProducts?.description} {...register("description", { required: true })} placeholder="Description"  className="place-orders"/><br/><br/>

                <input defaultValue={singleProducts?.price} {...register("price", { required: true })} placeholder="Price" className="place-orders"/><br/><br/>

                <input defaultValue={singleProducts?.quantity} {...register("quantity", { required: true })} placeholder="Quantity"  className="place-orders"/><br/><br/>

                <input defaultValue={singleProducts?.img} {...register("imgUrl", { required: true })} placeholder="Image Url"   className="place-orders"/><br/><br/>
                
                
                <input type="submit" value="Place Order" className="place-button bg-primary " />
            </form>

            </div>
                
                <Footer></Footer>
            </div>
    );
};

export default Purchase;