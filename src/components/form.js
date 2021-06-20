import React, { Component } from 'react';
import axios from 'axios';


export default class Form extends Component {

	constructor(props) {
		super(props)
		this.state = {
			city: null,
			temperature: null,
			humidity: null,
			wind: null,
			error: null,
			url: "http://127.0.0.1/"
		};
	}

	componentDidMount() {
		axios.get(this.state.url + "?javascript=enabled")
			.then(resp => {
				console.log(resp.data);
				this.setState({
					city: resp.data.city,
					temperature: resp.data.temperature,
					humidity: resp.data.humidity,
					wind: resp.data.wind
				})
			}).catch(error => {
				console.log(error);
			})
	}


	handleSubmit = (e) => {
		e.preventDefault();
		const city = "?city=" + e.target.elements.city.value;
		window.history.pushState({ urlPath: this.state.url + city }, "", city);

		axios.get(this.state.url + city + "&javascript=enabled")
			.then(resp => {
				console.log(resp);
				resp.data.city
					? this.setState({
						city: resp.data.city,
						temperature: resp.data.temperature,
						humidity: resp.data.humidity,
						wind: resp.data.wind
					})
					: this.setState({
						error: resp.data,
					})

			}).catch(error => {
				console.log(error);
				this.setState({ error: error });
			})
	}

	render() {

		const { city, temperature, humidity, wind, error } = this.state;

		return (
			<div >
				<ul>
					<li className="city"><p className="propItems">Weather in <b>{city}</b></p></li>
					<li className="items"><p className="propItems">Temperature: <b>{temperature}</b></p></li>
					<li className="items"><p className="propItems">Humidity : <b>{humidity}</b></p></li>
					<li className="items"><p className="propItems">Wind: <b>{wind}</b></p></li>
					<li className="items noBorder"><p className="propItems">{error}</p></li>
				</ul>
				<form action="/?city=" className='form' onSubmit={e => this.handleSubmit(e)}>
					<input className='input' type='text' name='city' placeholder='City' size='20' />
					<button className='myBtn'>Search</button>
				</form>
			</div>
		)
	}
}