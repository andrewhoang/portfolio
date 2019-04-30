import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = ({ theme }) => (
	<div className={`footer sticky ${theme || ''}`}>
		<p className="copyright">Andrew Hoang © {new Date().getFullYear()}</p>
		<SocialIcons theme={theme === 'dark' ? 'light' : 'dark'} />
	</div>
);

export default Footer;
