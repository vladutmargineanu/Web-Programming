import React from 'react';
import "./Counter.scss";

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        counter: 0
    };

    incrementClicked = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrementClicked = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    resetClicked = () => {
        this.setState({
            counter: 0
        });
    };

    render() {
        return (
            <div className="counter">
                <h1> {this.props.name} {this.state.counter} </h1>
                <button class='increment' onClick={this.incrementClicked}> Increment </button>
                <button class='decrement' onClick={this.decrementClicked}> Decrement </button>
                {this.state.counter != 0 && <button class='reset' onClick={this.resetClicked}> Reset </button>}
            </div>
        );
    }
};
export default Counter;