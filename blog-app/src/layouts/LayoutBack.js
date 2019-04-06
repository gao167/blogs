import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ContactPage from '../pages/ContactPage'
export default class LayoutBack extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link active" to="dashboard/contact">Contacts <span className="sr-only">(current)</span></Link>
                                <Link className="nav-item nav-link" to="#">Categories</Link>
                                <Link className="nav-item nav-link" to="#">Blogs</Link>
                            </div>
                        </div>
                    </nav>
                    <Route path="/dashboard/contact" component={ContactPage} />
                </Router>
            </div>
        )
    }
}
