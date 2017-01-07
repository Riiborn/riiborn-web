import React, { Component } from 'react';


export default class App extends Component {

	constructor() {
		super();
		this.state = {
			count: 0
		}
	}

	headingClick() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<h1>test</h1>
		);
	}
}

class Heading extends Component {
	render() {
		return (
			
			<h1>heading</h1>
		)
	}
}