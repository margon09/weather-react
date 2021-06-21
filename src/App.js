import './App.css';
import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form';

export default class App extends Component {


	render() {
		return (
			<div>
				
				<div className='info'>
					<Info />
				</div>
				<div className='widget'>
					<div className='panel panel-info'>
						<Form />
					</div>
				</div>
			</div>
		)
	}
}
