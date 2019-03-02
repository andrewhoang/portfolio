import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

class SocialIcons extends Component {
	render() {
		let { theme, size } = this.props;
		return (
			<div className={`social-icons ${theme || ''} ${size || ''}`}>
				<a href="https://www.linkedin.com/in/andrew-hoang-b3313695" target="_blank">
					<FontAwesomeIcon icon={faLinkedinIn} className="icon-sm" />
				</a>
				<a href="https://github.com/andrewhoang" target="_blank">
					<FontAwesomeIcon icon={faGithub} className="icon-sm" />
				</a>
				<a href="https://www.instagram.com/anhduhroo/" target="_blank">
					<FontAwesomeIcon icon={faInstagram} className="icon-sm" />
				</a>
				<a href="https://www.youtube.com/anhduhroo/" target="_blank">
					<FontAwesomeIcon icon={faYoutube} className="icon-sm" />
				</a>
			</div>
		);
	}
}

export default SocialIcons;
