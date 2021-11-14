
import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = e => {

    
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {

        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {

    const user = {email}
    fetch('https://afternoon-wildwood-28226.herokuapp.com/users/admin',{

        method: 'PUT',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {

            if (data.modifiedCount){

                console.log(data);
                setEmail('');
                setSuccess(true);
            }
            
        })

        e.preventDefault(user);
    }
    return (
    <div>
        <h2>Make an admin</h2>
        <form onSubmit={handleAdminSubmit}>
        <TextField 
        sx={{width: '30%'}}
        label="Email" 
        variant="standard" 
        onBlur={handleOnBlur}
        type="email" />
        <Button type="submit" variant="contained">Make Admin</Button>
        </form>
        {success && <Alert severity="success"> Admin created successfully!</Alert>}
    </div>
    );
};

export default MakeAdmin;