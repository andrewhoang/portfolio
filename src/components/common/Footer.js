import React, { Component } from 'react';
import SocialIcons from './SocialIcons';

class Footer extends Component {
	render() {
		let { theme } = this.props;
		return (
			<div className={`footer sticky ${theme || ''}`}>
				<p className="copyright">Andrew Hoang © {new Date().getFullYear()}</p>
				<SocialIcons theme={theme === 'dark' ? 'light' : 'dark'} />
			</div>
		);
	}
}

export default Footer;
