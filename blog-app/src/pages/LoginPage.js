import React, { Component } from 'react'

export default class LoginPage extends Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center ">
        <h3 className="text-center">Login</h3>
        <form className="col-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-outline-danger btn-block">Login</button>
        </form>

      </div>
    )
  }
}
