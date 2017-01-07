import React, { Component } from 'react';


export default class Banner extends Component {

	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					Riiborn
				</div>
  				<div className="col-md-8">
  					<ul>
  						<li>
  							Discover
  						</li>
  						<li>
  							My Bands
  						</li>
  						<li>
  							My Profile
  						</li>
  					</ul>
  				</div>
  			</div>
			
		);
	}
}

