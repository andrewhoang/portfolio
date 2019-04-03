import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectPreview = () => (
	<Col md={6} xs={12} className="preview-container">
		<a href="https://soundexplorer.herokuapp.com" target="_blank">
			<img className="preview" src={`http://andrew-hoang.com/img/soundexplorer_demo.gif`} alt="preview" />
		</a>
	</Col>
);

export default ProjectPreview;
