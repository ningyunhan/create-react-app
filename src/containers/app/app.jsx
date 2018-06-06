import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CommentAdd from '../../components/comment-add/comment-add';
import CommentList from '../../components/comment-list/comment-list';
import {addComment, deleteComment} from '../../redux/actions'

class App extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
    }


/*    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {username: 'Tom', content: "React is so interesting"},
                {username: 'Jack', content: "React is damn hard"},
            ],
        }
    }*/

    // state = {
    //     /*
    //     comments: [
    //         {username: 'Tom', content: "React is so interesting"},
    //         {username: 'Jack', content: "React is damn hard"},
    //         {username: 'Yunhan', content: "React is my toy"},
    //     ],
    //     */
    //     comments: []
    // }


    componentDidMount() {

    }

/*    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }



    //this is the function to delete a comment

    deleteComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }*/



    render() {
        const {comments, addComment, deleteComment} = this.props;

        return (
            <div>
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <CommentAdd addComment={addComment}/>
                        <CommentList comments={comments} deleteComment={deleteComment}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({comments: state}),
    {addComment, deleteComment}
)(App);