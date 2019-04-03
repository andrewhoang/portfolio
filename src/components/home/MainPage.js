import React, { Component, Fragment } from 'react';

import Hero from './Hero';
import Header from '../common/Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class MainPage extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<Fragment>
				<Header />
				<Hero />
				<About />
				<Projects />
				<Contact />
			</Fragment>
		);
	}
}

export default MainPage;
