import React, { Component } from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Home extends Component {
 
  render() {
    console.log(this.posts);
    const { posts } = this.props;
    const list = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/'+post.id}>
              <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
        <div className="center">No post</div>
      );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {list}

      </div>
    );
  }
}


const mapTheState = (state) =>{
  return {
    posts : state.posts
  }
}
export default connect(mapTheState)(Home);
