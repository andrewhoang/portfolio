import React, { Component } from 'react';

import Hero from './Hero';
import Header from '../common/Header';
import About from './About';
import Contact from './Contact';

class MainPage extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<div>
				<Header />
				<Hero />
				<About />
				<Contact />
			</div>
		);
	}
}

export default MainPage;
