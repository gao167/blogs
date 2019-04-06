import React, { Component } from 'react'

export default class ContactPage extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <div className="form-group text-center">
            <input type="button" className="btn btn-danger " value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}
