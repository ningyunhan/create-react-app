import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './commentList.css'
import CommentItem from '../comment-item/comemnt-item'


class CommentList extends Component {




    static propTypes = {
        comments: PropTypes.array.isRequired,
    }



    render() {

        const {comments, deleteComment} = this.props;
        const display = comments.length === 0 ? 'block' : 'none';

        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((item, index) => <CommentItem comment={item} key={index}  index={index}/>)
                    }
                </ul>
            </div>
        );
    }
}


// CommentList.propTypes = {
//     comments: PropTypes.array.isRequired,
// }

export default CommentList;