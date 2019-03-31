import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import LoginPage from './pages/LoginPage'
import ContactPage from './pages/ContactPage'
class App extends Component {
  // componentWillMount = () => {
  //   this.props.dispatch({ type: 'BLOG_REQUEST' })
  //   axios.get('http://localhost:4000/')
  //     .then(res => {
  //       this.props.dispatch({ type: 'BLOG_REQUEST_SUCCESS', payload: res.data.data })
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/contact/" component={ContactPage} />
            <Route path="/login/" component={LoginPage} />
            <Route path="/blog/" component={BlogPage} />
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { blog: { loading, data } } = state
  return {
    loading,
    data
  }
}
export default connect(mapStateToProps)(App);
