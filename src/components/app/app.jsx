import React, {Component} from 'react'
import PubSub from 'pubsub-js'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: [
    //             {username: 'Tom', content: "React is so interesting"},
    //             {username: 'Jack', content: "React is damn hard"},
    //         ],
    //     }
    // }

    state = {
        comments: [
            {username: 'Tom', content: "React is so interesting"},
            {username: 'Jack', content: "React is damn hard"},
            {username: 'Yunhan', content: "React is my toy"},
        ],
    }


    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }



    //this is the function to delete a comment

    deleteComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }

    componentDidMount() {
        //Subscribe to the news published by comment-item component
        PubSub.subscribe('delete', (msg, index) => {
            this.deleteComment(index);
        });
    }

    render() {
        const {comments} = this.state;

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
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;