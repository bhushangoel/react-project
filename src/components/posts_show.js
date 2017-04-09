import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOnePost} from '../actions/index';

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchOnePost(this.props.params.id);
    }

    render() {
        if(!this.props.post){
            return;
        }

        return (
            <div>Show Post</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, { fetchOnePost})(PostsShow);