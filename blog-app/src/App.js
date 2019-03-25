import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
class App extends Component {
  componentWillMount = () => {
    axios.get('http://localhost:4000/')
      .then(res=> console.log(res))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        1
      </div>
    );
  }
}

export default App;
