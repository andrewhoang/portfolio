import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Row, Col, Button } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';

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
			<div id="contact">
				<ScrollTrigger onEnter={() => this.setState({ entered: true })} triggerOnLoad={false}>
					<Row className="section">
						<Col md={12} className={className}>
							<a href="mailto:andrw.hoang@gmail.com" className={`hvr-pulse section-title light`}>
								Let's Talk!
							</a>
							<p>
								If any of these points at all have piqued your interest, please feel free to get in
								touch!
							</p>
							<Button onClick={() => window.open('http://andrew-hoang.com/resume.pdf', '__blank')}>
								Resume
							</Button>
						</Col>
					</Row>
				</ScrollTrigger>
			</div>
		);
	}
}

export default Contact;
