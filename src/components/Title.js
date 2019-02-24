import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
// import SplitPane from 'react-split-pane';
import SplitterLayout from 'react-splitter-layout';

class Title extends Component {
	render() {
		return (
			<div className="title">
				{/* <p className="animated fadeIn">Photographer, Developer, & Adventurer</p> */}
				<h1 className="animated fadeIn">
					Andrew <strong>Hoang</strong>
				</h1>
				<p className="animated fadeIn">I went to business school, but ended up doing other things.</p>
			</div>
		);
	}
}

export default Title;
