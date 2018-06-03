import React, {Component} from 'react'

class Message extends Component {


    state = {
        messages: [],
    }

    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: 1, title: "message001"},
                {id: 3, title: "message003"},
                {id: 5, title: "message005"}
            ];

            this.setState({messages});
        }, 1000)
    }


    render() {
        return (
            <ul>
                {
                    this.state.messages.map((item, index) => (
                        <li>
                            <a href="???">{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Message;