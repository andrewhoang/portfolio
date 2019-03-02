import React, { Component } from 'react';

class Loading extends Component {
	render() {
		if (!this.props.rendered) {
			return (
				<div className="flex loading" style={{ height: '100vh' }}>
					<img className="logo" alt="logo" src="http://andrew-hoang.com/img/myAvatar-white.png" width={100} />
				</div>
			);
		}
		return this.props.children;
	}
}

export default Loading;
