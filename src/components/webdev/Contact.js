import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Row, Col, Button } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';
import SocialIcons from '../SocialIcons';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { entered: false };
		autoBind(this);
	}

	render() {
		let { entered } = this.state;
		let className = `${entered ? 'animated bounceIn ' : ''} text-center`;
		return (
			<ScrollTrigger onEnter={() => this.setState({ entered: true })} triggerOnLoad={false}>
				<div id="contact">
					<Row className="section">
						<Col md={12} className={className}>
							<h1 className={`hvr-pulse section-title light`}>Let's Talk!</h1>
							<p>
								If any of these points at all have piqued your interest, please feel free to get in
								touch!
							</p>
							<Button onClick={() => window.open('http://andrew-hoang.com/resume.pdf', '__blank')}>
								Resume
							</Button>
						</Col>
					</Row>
				</div>
			</ScrollTrigger>
		);
	}
}

export default Contact;
