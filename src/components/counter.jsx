import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTages() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>;
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.getImage()} alt="" />
                <div>{this.renderTages()}</div>
                {this.state.tags.length === 0 && 'Please create a new tag'}
            </React.Fragment>
        );
    };

    styles = {
        fontSize: 50,
    };

    getImage() {
        const url = 'https://picsum.photos/500';
        return url;
    }

}

export default Counter;