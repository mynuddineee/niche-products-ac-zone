import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const{user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {

        signInWithGoogle(location, history);
    }

    return (
        <>
        <Navigation></Navigation>
        <Container>

        <Grid container spacing={2}>
            <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>

                <form onSubmit={handleLoginSubmit}>
                    <TextField sx={{width:'75%', m:1}} id="standard-basic" label="You email" name="email" onBlur={handleOnChange} variant="standard" /><br/>

                    <TextField sx={{width:'75%', m:1}} id="standard-basic" type="password" label="Your Password" name="password" onBlur={handleOnChange}  variant="standard" />

                    

                    <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Login</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/signUp">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">User logged in successfully!</Alert>}

                    {authError  && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>-----------------------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                
                
            </Grid>
            <Grid item xs={12} md={6}>
                <img src="" sx={{width:1, height:1}} alt=""/>
            </Grid>
            
        </Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Login;