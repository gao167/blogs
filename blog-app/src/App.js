import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
class App extends Component {
  componentWillMount = () => {
    this.props.dispatch({ type: 'BLOG_REQUEST' })
    axios.get('http://localhost:4000/')
      .then(res => {
        this.props.dispatch({ type: 'BLOG_REQUEST_SUCCESS', payload: res.data.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props)
    const { blogs, loading } = this.props
    if (loading) {
      return <p>Loading!!!</p>
    }
    return (
      <div className="App">
        <ul>
          {blogs.map((blog) => <li key={blog.id}>{blog.name}</li>)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(App);
