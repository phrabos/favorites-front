import React, { Component } from 'react'
import { userLogin } from './api-utils.js';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (e)=> {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e)=> {
        this.setState({password: e.target.value})
    }
    handleSubmit = async (e)=> {
        e.preventDefault();
        const user = await userLogin(this.state.email, this.state.password);

        this.props.handleUserChange(user.token)
        this.props.history.push('/favorites');

    }
    render() {
        return (
            <div>
                <h3>Log In</h3>

                <form onSubmit={this.handleSubmit}>
                    <label >
                        email
                        <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    
                    <label >
                        password
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Submit</button>
                </form>   

            </div>
        )
    }
}
