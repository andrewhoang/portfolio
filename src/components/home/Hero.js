import React from 'react';
import { Row } from 'react-bootstrap';
import { Link as AnchorLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Title = () => (
	<div className="title">
		<h1 className="animated fadeIn">Andrew Hoang</h1>
		<p className="animated fadeIn">Developer, Photographer, & Adventurer</p>
	</div>
);

const Hero = () => (
	<Row id="hero">
		<div className="home-container">
			<Title />
			<Row className="action">
				<AnchorLink className="btn home-btn" to="about" spy={true} smooth={true} offset={-80} duration={500}>
					Web Development
				</AnchorLink>
				<Link className="btn home-btn" to="photography">
					Photography
				</Link>
			</Row>
		</div>
	</Row>
);

export default Hero;
