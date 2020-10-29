import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement() {
        console.log('Increment Clicked')
    }

    render() {

        return (
            <React.Fragment>
                <img src={this.getImage()} alt="" />
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>
        );
    };

    styles = {
        fontSize: 50,
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "warning" : "primary";
        return classes;
    }

    getImage() {
        const url = 'https://picsum.photos/500';
        return url;
    }

    formatCount() {
        const { count } = this.state;
        const x = "Zero"
        return count == 0 ? x : count;
    }
}

export default Counter;