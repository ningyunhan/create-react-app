import React, {Component} from 'react'
import logo from '../logo.svg'


class App extends Component {

    render() {
        return (
            <div>
                <img src={logo} alt="logo" className='logo'/>
                <p className='title'>This is a React component</p>
            </div>
        );
    }
}

export default App;
