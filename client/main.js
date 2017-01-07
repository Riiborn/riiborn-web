import './main.html';
import '/imports/startup/client';


import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';



import Navbar from '../imports/client/Navbar';

import { renderRoutes } from '../imports/startup/client/routes.jsx';






Meteor.startup(() => {

	render(renderRoutes(), document.getElementById('render-target'));
	render(<App />, document.getElementById('render-target'));
	render(<Navbar />, document.getElementById('render-target'));

});


