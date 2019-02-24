import React, { Component } from 'react';

class Loading extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		if (!this.props.rendered) {
			return (
				<div className="flex loading" style={{ height: '100vh' }}>
					<img className="logo" src="http://andrew-hoang.com/img/myAvatar-white.png" width={100} />
				</div>
			);
		}
		return this.props.children;
	}
}

export default Loading;
