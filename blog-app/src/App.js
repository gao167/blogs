import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutFront from './layouts/LayoutFront'
import LoginPage from './pages/LoginPage'
import LayoutBack from './layouts/LayoutBack'
import {getBlogs} from './modules/blog/action'

class App extends Component {
  componentWillMount = () => {
    this.props.dispatch(getBlogs())
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={LayoutBack} />
            <Route path="/" component={LayoutFront} />
          </Switch>
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
