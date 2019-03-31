import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LayoutFront from './layouts/LayoutFront'

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
            <Route path="/" component={LayoutFront} />
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
