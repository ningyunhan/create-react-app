import {ADD_COMMENT, DELETE_COMMENT} from './action-types'

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    data: comment,
});

export  const deleteComment = (index) => ({
    type: DELETE_COMMENT,
    data: index,
});