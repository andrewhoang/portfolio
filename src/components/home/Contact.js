import React, { useState } from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';

const Contact = () => {
	let [entered, setEntered] = useState(false);
	let className = `${entered ? 'animated bounceIn ' : ''} text-center`;
	return (
		<div id="contact">
			<ScrollTrigger onEnter={() => setEntered(true)} triggerOnLoad={false}>
				<Row className="section">
					<Col md={12} className={className}>
						<a href="mailto:andrw.hoang@gmail.com" className={`hvr-pulse section-title light`}>
							Let's Talk!
						</a>
						<p>
							If any of these points at all have piqued your interest, please feel free to get in touch!
						</p>
						<Button onClick={() => window.open('http://andrew-hoang.com/resume.pdf', '_blank')}>
							Resume
						</Button>
					</Col>
				</Row>
			</ScrollTrigger>
		</div>
	);
};

export default Contact;
