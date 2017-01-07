import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'



export default class NotFound extends Component {

	constructor() {
		super();
		//	{this.props.routes[this.props.routes.length - 1]}
	}


	render() {
		return (
			<h1>No Page found</h1>

		);

	}
}