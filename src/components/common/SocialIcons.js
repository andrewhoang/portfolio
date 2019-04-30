import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcon = ({ link, icon }) => (
	<a href={link} target={!link.includes('mail') ? '_blank' : ''}>
		<FontAwesomeIcon icon={icon} className="icon-sm" />
	</a>
);

const SocialIcons = ({ theme, size }) => (
	<div className={`social-icons ${theme || ''} ${size || ''}`}>
		<SocialIcon link="mailto:andrw.hoang@gmail.com" icon={faPaperPlane} />
		<SocialIcon link="https://www.linkedin.com/in/andrew-hoang-b3313695" target="_blank" icon={faLinkedinIn} />
		<SocialIcon link="https://github.com/andrewhoang" target="_blank" icon={faGithub} />
		<SocialIcon link="https://www.instagram.com/anhduhroo/" target="_blank" icon={faInstagram} />
		<SocialIcon link="https://www.youtube.com/anhduhroo/" target="_blank" icon={faYoutube} />
	</div>
);

export default SocialIcons;
