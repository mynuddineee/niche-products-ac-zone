
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
  
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts/ExploreProducts';
import Purchase from './Pages/Purchase/Purchase';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Payment from './Pages/Dashboard/Payment/Payment';
import MyOrders from './Pages/Dashboard/Dashboard/MyOrders/MyOrders';
import Reviews from './Pages/Home/Reviews/Reviews';
import Review from './Pages/Dashboard/Dashboard/Review/Review';
import ManageAllOrders from './Pages/Dashboard/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/Dashboard/ManageProducts/ManageProducts';





function App() {
  return (
    <div className="App">
      <AuthProvider>
       <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
              
            </Route>
            
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/exploreProducts">
              <ExploreProducts />
            </Route>
            <Route path="/signIn">
                <Login/>
              </Route>
              <Route path="/signUp">
                  <Register/>
              </Route>
            <PrivateRoute exact path="/purchase/:purchaseId">
              <Purchase/>
            </PrivateRoute>
            
            <Route path="/addProduct">
              <AddProducts/>
            </Route>
            <Route path="/payment">
              <Payment/>
            </Route>
            <Route path="/myOrders">
              <MyOrders/>
            </Route>
            <Route path="/review">
              <Review/>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders/>
            </Route>
            <Route path="/manageAllProducts">
              <ManageProducts/>
            </Route>
            <Route path = "*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
