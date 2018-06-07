import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types'

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    data: comment,
});

export const deleteComment = (index) => ({
    type: DELETE_COMMENT,
    data: index,
});


const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments});

export const getComments = () => {
    return dispatch => {
        setTimeout(() => {
            const comments = [
                    {username: 'Tom', content: "React is so interesting"},
                    {username: 'Jack', content: "React is damn hard"}
            ];

            dispatch(receiveComments(comments));
        }, 1000);
    }
}