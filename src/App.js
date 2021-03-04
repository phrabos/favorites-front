import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
import PrivateRoute from './PrivateRoute.js';
import Home from './Home.js';
import SignupPage from './SignupPage.js';
import LoginPage from './LoginPage.js';
import SearchPage from './PhotoSearchPage.js';
import { getTokenFromLocalStorage, putTokenInLocalStorage } from './local-storage-utils.js';
import FavoritesPage from './favorites.js';

export default class App extends Component {

  state = {
    token: getTokenFromLocalStorage(),
  }

  handleUserChange = (token)=> {
    this.setState({token})
    putTokenInLocalStorage(token);
  }

  handleLogout = () => {
    this.handleUserChange('');
  }

    render() {
        return (
            <div>
                <Router>
                  <Header
                  token={this.state.token}
                  handleLogout={this.handleLogout}
                  />
                    <Switch>
                        <Route 
                            path='/' 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <PrivateRoute 
                            path='/search' 
                            exact
                            token={this.state.token}
                            render={(routerProps) => 
                              <SearchPage 
                                token={this.state.token}
                                {...routerProps} 
                              />} 
                        />
                        <PrivateRoute 
                            path='/favorites' 
                            exact
                            token={this.state.token}
                            render={(routerProps) => 
                              <FavoritesPage 
                                token={this.state.token}
                                {...routerProps} 
                              />} 
                        />
                        <Route 
                          path='/login' 
                          exact
                          render={(routerProps) => 
                            <LoginPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} 
                            />} 
                        />
                        <Route 
                          path='/signup' 
                          exact
                          render={(routerProps) => 
                            <SignupPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} 
                            />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
