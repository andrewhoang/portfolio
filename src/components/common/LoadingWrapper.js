import React from 'react';

const Loading = ({ rendered, children }) =>
	!rendered ? (
		<div className="flex loading">
			<img className="logo" src="http://andrew-hoang.com/img/myAvatar-white.png" alt="logo" width={100} />
		</div>
	) : (
		children
	);
export default Loading;
