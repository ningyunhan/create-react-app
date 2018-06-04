import React, {Component} from 'react';


import {INCREMENT, DECREMENT} from '../redux/action-types'

class App extends Component {




    increment = () => {
        const num = this.select.value * 1;

        //const count = this.state.count + num;

        //this.setState({count})
        this.props.store.dispatch({type: INCREMENT, data: num});
    };

    decrement = () => {
        const num = this.select.value * 1;



        this.props.store.dispatch({type: DECREMENT, data: num});
    };



    incrementIfOdd = () => {
        const num = this.select.value * 1;

        let count = this.props.store.getState();
        if(count % 2 === 1) {
            //count += num;
            this.props.store.dispatch({type: INCREMENT, data: num});
        }
    };


    incrementIfAsync = () => {
        const num = this.select.value * 1;

        //let count = this.state.count;

        setTimeout(() => {
            this.props.store.dispatch({type: INCREMENT, data: num});
        }, 1000);
    };

    render() {

        const count = this.props.store.getState();

        return (
            <div>
                <p>Click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.incrementIfAsync}>increment if asyc</button>
                </div>
            </div>
        );
    }
}

export default App;