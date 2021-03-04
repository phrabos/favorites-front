import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
// import PrivateRoute from './components/PrivateRoute.js';
import Home from './Home.js';
// import SignUpPage from './AuthPages/SignUpPage.js';
// import LoginPage from './AuthPages/LoginPage.js';
import PhotoSearchPage from './PhotoSearchPage.js';
// import { getTokenFromLocalStorage, putTokenInLocalStorage } from './local-storage-utils';
// import FavoritesPage from './FavoritesPage/FavoritesPage';

export default class App extends Component {

    render() {
        return (
            <div>
                <Router>
                  <Header/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <PhotoSearchPage 
                              {...routerProps} 
                              // user={this.state.user} 
                              />} 
                        />
                        {/* <Route 
                            path="/favorites" 
                            exact
                            token={user && user.token}
                            render={(routerProps) => 
                              <FavoritesPage 
                                user={this.state.user}
                                {...routerProps} 
                              />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => 
                            <LoginPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} 
                            />} 
                        />
                        <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => 
                            <SignUpPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} 
                            />} 
                        /> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}
