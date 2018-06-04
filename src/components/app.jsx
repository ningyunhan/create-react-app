import React, {Component} from 'react';
import {Button, Toast} from 'antd-mobile';



class App extends Component {

    handleClick = () => {
        Toast.loading("Please wait", 1);
    }

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.handleClick}>Submit</Button>
            </div>
        );
    }
}

export default App;