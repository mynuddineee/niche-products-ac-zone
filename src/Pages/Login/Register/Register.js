import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState} from 'react';
import { NavLink, useHistory  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Register = () => {


    
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const {user, registerUser, isLoading, authError} = useAuth();
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        if(loginData.password !== loginData.password2){

            alert('Please retype correct password')
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }


    return (
        <Container>

        <Grid container spacing={2}>
            <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Register
                </Typography>

              {
                  !isLoading && 

                  <form onSubmit={handleLoginSubmit}>
                 
                 
                 <TextField 
                  sx={{width:'75%', m:1}} 
                  id="standard-basic" 
                  label="Your Name" 
                  name="name" 
                  
                  onBlur={handleOnBlur} 
                  variant="standard" /><br/>
                  
                  
                  <TextField 
                  sx={{width:'75%', m:1}} 
                  id="standard-basic" 
                  label="Your email" 
                  name="email" 
                  type="email" 
                  onBlur={handleOnBlur} 
                  variant="standard" /><br/>

                  <TextField 
                  sx={{width:'75%', m:1}} 
                  id="standard-basic" 
                  type="password" 
                  label="Your Password" 
                  name="password" 
                  onBlur={handleOnBlur}  
                  variant="standard" />

                  <TextField 
                  sx={{width:'75%', m:1}} 
                  id="standard-basic" 
                  type="password" 
                  label="Retype Your Password" 
                  name="password2" 
                  onBlur={handleOnBlur}  
                  variant="standard" />

                  

                  <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Register</Button>
                  <NavLink style={{textDecoration: 'none'}} to="/signIn">
                      <Button variant="text">Already Registered? Please Login
                      </Button>
                  </NavLink>
              </form>
              }

              {isLoading && <CircularProgress />}

              {user?.email && <Alert severity="success">User has been created successfully!</Alert>}

              {authError  && <Alert severity="error">{authError}</Alert>}
                
            </Grid>
            <Grid item xs={12} md={6}>
                <img src="" sx={{width: 1/4, height:1/4}} alt=""/>
            </Grid>
            
        </Grid>
        </Container>
    );
};

export default Register;