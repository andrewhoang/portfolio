import React, { Component } from 'react';

class Title extends Component {
	render() {
		return (
			<div className="title">
				{/* <p className="animated fadeIn">Photographer, Developer, & Adventurer</p> */}
				<h1 className="animated fadeIn">
					Andrew <strong>Hoang</strong>
				</h1>
				<p className="animated fadeIn">Developer, Photographer, & Adventurer</p>
			</div>
		);
	}
}

export default Title;
