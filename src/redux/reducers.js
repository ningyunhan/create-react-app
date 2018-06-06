import {ADD_COMMENT, DELETE_COMMENT} from './action-types'


const initComments = [
    {username: 'Tom', content: "React is so interesting"},
    {username: 'Jack', content: "React is damn hard"}
];

export function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case  DELETE_COMMENT:
            return state.filter((item, index) => index !== action.data);
        default:
            return state;
    }
}