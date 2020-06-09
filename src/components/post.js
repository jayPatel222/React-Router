
import React, { Component } from 'react';
import { connect } from 'react-redux'

class post extends Component {
    handleChange = () => {
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/');
    }

    render() {
        const postcheck = this.props.posts ? (
            <div className="post">
                <h4>{this.props.posts.title}</h4>
                <p>{this.props.posts.body}</p>
                <div className="center">
                    <button className="btn" onClick={this.handleChange}>Delete</button>
                </div>
            </div>


        ) : (
                <div className="center">Lodaing post</div>
            )

        return (
            <div className="container">
                {postcheck}
            </div>
        );
    }
}
const mapTheState = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        posts: state.posts.find((post) => {
            return post.id === id
        })
    }
}
const mapDispatch = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: 'DELETE_POSTS', id: id }) }
    }
}

export default connect(mapTheState, mapDispatch)(post);