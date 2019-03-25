import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      blogs: []
    }
  }
  componentWillMount = () => {
    this.setState({
      loading: true
    })
    axios.get('http://localhost:4000/')
      .then(res=> {
        this.setState({
          blogs: res.data.data,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }
  
  render() {
    const {blogs, loading} = this.state
    if(loading){
      return <p>Loading!!!</p>
    }
    return (
      <div className="App">
        <ul>
          {blogs.map((blog)=><li key={blog.id}>{blog.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
