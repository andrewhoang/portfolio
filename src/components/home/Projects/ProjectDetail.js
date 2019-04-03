import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = () => (
	<Col md={6} xs={12} className="project-detail">
		<h2>Sound Explorer</h2>
		<p>
			Discover new music. Search for favorite track or some of your favorite artists to generate and save curated
			playlists to your Spotify. See the latest releases of artists you follow.
		</p>
		<ul>
			<li>React.js/Redux</li>
			<li>Node.js</li>
			<li>Express</li>
			<li>Spotify Web API</li>
			<li>OAuth</li>
		</ul>
		<a href="https://github.com/andrewhoang/sound-explorer" target="_blank">
			<FontAwesomeIcon icon={faCode} /> View Source
		</a>
	</Col>
);

export default ProjectDetail;
