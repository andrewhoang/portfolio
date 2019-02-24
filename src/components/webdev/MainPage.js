import React, { Component } from 'react';

import Hero from '../Hero';
import Header from '../Header';
import About from './About';
import Contact from './Contact';

class MainPage extends Component {
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
