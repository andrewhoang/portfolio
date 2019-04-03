import React, { Component } from 'react';
import autoBind from 'react-autobind';

import ProjectPreview from './Projects/ProjectPreview';
import ProjectDetail from './Projects/ProjectDetail';
import { Row } from 'react-bootstrap';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { preview: 'login.png' };
		autoBind(this);
	}

	render() {
		return (
			<div id="projects" className="section">
				<h1 className="text-center section-title">Projects</h1>
				<Row className="project-container">
					<ProjectPreview />
					<ProjectDetail />
				</Row>
			</div>
		);
	}
}

export default Projects;
