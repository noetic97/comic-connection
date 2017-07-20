import React, { Component } from 'react';
import { func } from 'prop-types';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
    };
  }

  handleChange(e) {
    const key = e.target.name;
    this.setState({[key]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitSignup(this.state);
    this.setState({
      name: '',
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
    });
  }

  render() {
    return (
      <div className="signup-component">
        <form className="signup-form"
              onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Create an Account</h1>
          <input type="text"
                 className="signup-name"
                 placeholder="Name"
                 value={this.state.name}
                 name="name"
                 onChange={(e) => this.handleChange(e)}/>
          <input type="text"
                 className="signup-username"
                 placeholder="Username"
                 value={this.state.username}
                 name="username"
                 onChange={(e) => this.handleChange(e)}/>
          <input type="email"
                 className="signup-email"
                 placeholder="Email"
                 value={this.state.email}
                 name="email"
                 onChange={(e) => this.handleChange(e)}/>
          <input type="password"
                 className="signup-password"
                 placeholder="Password"
                 value={this.state.password}
                 name="password"
                 onChange={(e) => this.handleChange(e)}/>
          <input type="password"
                 className="signup-password-verify"
                 placeholder="Verify your password"
                 value={this.state.passwordVerify}
                 name="passwordVerify"
                 onChange={(e) => this.handleChange(e)}/>
          <button className="signup-submit">Submit</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  submitSignup: func,
};
