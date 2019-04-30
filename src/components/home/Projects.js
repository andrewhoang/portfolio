import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectPreview = () => (
	<Col md={6} xs={12} className="preview-container">
		<a href="https://soundexplorer.herokuapp.com" target="_blank" rel="noopener noreferrer">
			<img className="preview" src={`http://andrew-hoang.com/img/soundexplorer_demo.gif`} alt="preview" />
		</a>
	</Col>
);

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
		<a href="https://github.com/andrewhoang/sound-explorer" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={faCode} /> View Source
		</a>
	</Col>
);

const Projects = () => (
	<div id="projects" className="section">
		<h1 className="text-center section-title">Projects</h1>
		<Row className="project-container">
			<ProjectPreview />
			<ProjectDetail />
		</Row>
	</div>
);

export default Projects;
