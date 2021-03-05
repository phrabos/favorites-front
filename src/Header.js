import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                <NavLink to='/'>Home</NavLink>
                {
                this.props.token && <>
                <NavLink to='/search'>Search</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
                <button onClick={this.props.handleLogout}>Sign out</button>
                </>
                }
                {
                 (!this.props.token) && <>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
                </>
                }
            </div>
        )
    }
}
