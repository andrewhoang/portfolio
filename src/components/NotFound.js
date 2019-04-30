import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<Row className="not-found">
		<div className="home-container">
			<h1>404</h1>
			<h2>It looks like you're lost</h2>
			<Row className="action">
				<Link className="btn home-btn" to="/">
					Go back home
				</Link>
			</Row>
		</div>
	</Row>
);

export default NotFound;
