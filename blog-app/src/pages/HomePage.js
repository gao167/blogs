import React, { Component } from 'react'
import BlogItem from '../components/BlogItem'
import BlogFeature from '../components/BlogFeature'
import Menu from '../layouts/Menu'
import Slider from '../layouts/Slider'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="nav-scroller py-1 mb-2">
            <Menu />
          </div>
          <BlogFeature />
          <div className="row mb-2">
            {[1, 2].map((item) => <div className="col-md-6" key={item}><BlogItem  type="blog_type_1" /></div>)}
          </div>
        </div>
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-4 mb-4 font-italic border-bottom">
                From the Firehose
        </h3>
              {[1, 2, 3].map((item) => <BlogItem key={item} />)}
              <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href="#">Older</a>
                <a className="btn btn-outline-secondary disabled" href="#" tabIndex={-1} aria-disabled="true">Newer</a>
              </nav>
            </div>{/* /.blog-main */}
            <Slider />{/* /.blog-sidebar */}
          </div>{/* /.row */}
        </main>{/* /.container */}
      </div>
    )
  }
}
