import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Link as AnchorLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import Title from './Title';

class Hero extends Component {
	render() {
		return (
			<Row className="hero">
				<div className="home-container">
					<Title />
					<Row className="action">
						<AnchorLink
							className="btn home-btn"
							to="about"
							spy={true}
							smooth={true}
							offset={-75}
							duration={500}
						>
							Web Development
						</AnchorLink>
						<Link className="btn home-btn" to="photography">
							Photography
						</Link>
					</Row>
				</div>
			</Row>
		);
	}
}

export default Hero;
