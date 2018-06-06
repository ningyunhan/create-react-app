import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
    }

    increment = () => {
        const num = this.select.value * 1;

        //const count = this.state.count + num;

        //this.setState({count})
        this.props.increment(num);
    };

    decrement = () => {
        const num = this.select.value * 1;

        this.props.decrement(num);
    };



    incrementIfOdd = () => {
        const num = this.select.value * 1;

        let count = this.props.count
        if(count % 2 === 1) {
            //count += num;
            this.props.increment(num);
        }
    };


    incrementIfAsync = () => {
        const num = this.select.value * 1;

        //let count = this.state.count;

        setTimeout(() => {
            this.props.increment(num);
        }, 1000);
    };

    render() {

        const {count} = this.props;

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

export default Counter;
