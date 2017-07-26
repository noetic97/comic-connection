import React, { Component } from 'react';
import { func } from 'prop-types';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    const key = e.target.name;
    this.setState({[key]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitLogin(this.state);
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="login-component">
        <form className="login-form"
              onSubmit={(e) => this.handleSubmit(e)}>
          <h1 className="login-title">Login</h1>
          <input type="email"
                 className="login-email"
                 placeholder="email"
                 value={this.state.email}
                 name="email"
                 onChange={(e) => this.handleChange(e)}/>
          <input type="password"
                 className="login-password"
                 placeholder="password"
                 value={this.state.password}
                 name="password"
                 onChange={(e) => this.handleChange(e)}/>
          <button className="login-submit">Submit</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  submitLogin: func,
};
