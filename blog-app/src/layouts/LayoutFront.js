import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route } from "react-router-dom"
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import BlogPage from '../pages/BlogPage'
import ContactPage from '../pages/ContactPage'
export default class LayoutFront extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Route path="/about" component={AboutPage} />
                <Route path="/" exact component={HomePage} />
                <Route path="/blog/:slug" component={BlogPage} />
                <Route path="/contact" component={ContactPage} />
                <Footer />
            </Router>
        )
    }
}
