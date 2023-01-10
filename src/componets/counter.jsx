import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };
    render() { 
        return (
        <React.Fragment>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <h1>{this.formatCount()}</h1>
            <button onClick={this.inc}>Inc</button>
        </React.Fragment>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
    inc() {
        const {count} = this.state;
        console.log(count)
        // this.state.count++;
    }
}
 
export default Counter;