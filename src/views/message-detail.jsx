import React from 'react'


const allMessages = [
    {id: 1, title: "message001", content: 'I love you China'},
    {id: 3, title: "message003", content: 'I love you family'},
    {id: 5, title: "message005", content: 'I love you parents'}
];


function MessageDetail(props) {
    const {id} = props.match.params;


    const message = allMessages.find((m) => m.id === id * 1)

    return (
        <ul>
            <li>ID: {message.id}</li>
            <li>TITLE: {message.title}</li>
            <li>CONTENT: {message.content}</li>
        </ul>
    );
}

export default MessageDetail;