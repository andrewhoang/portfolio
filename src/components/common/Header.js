import React, { Component } from 'react';

import { Link as AnchorLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {
		window.addEventListener('scroll', this.listenToScroll, false);
	};

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.listenToScroll);
	};

	listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrolled = winScroll / height;
		this.setState({
			scrolled: scrolled > 0.5 ? true : false,
		});
	};

	setNavExpanded = expanded => {
		this.setState({ navExpanded: expanded });
	};

	closeNav = () => {
		this.setState({ navExpanded: false });
	};

	render() {
		let { scrolled } = this.state;
		return (
			<Navbar
				collapseOnSelect
				fixed="top"
				expand="lg"
				className={scrolled ? 'dark' : 'transparent'}
				onToggle={this.setNavExpanded}
				expanded={this.state.navExpanded}
			>
				<Navbar.Brand>
					<AnchorLink
						className="nav-link"
						to="hero"
						spy={true}
						smooth={true}
						duration={500}
						onClick={this.closeNav}
					>
						<img src="http://andrew-hoang.com/img/myAvatar-white.png" className="logo" alt="logo" />
					</AnchorLink>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav>
						<AnchorLink
							className="nav-link"
							to="hero"
							spy={true}
							smooth={true}
							duration={500}
							onClick={this.closeNav}
						>
							Home
						</AnchorLink>
						<AnchorLink
							className="nav-link"
							to="about"
							spy={true}
							offset={-75}
							smooth={true}
							duration={500}
							onClick={this.closeNav}
						>
							About
						</AnchorLink>
						<AnchorLink
							className="nav-link"
							to="projects"
							spy={true}
							offset={-75}
							smooth={true}
							duration={500}
							onClick={this.closeNav}
						>
							Projects
						</AnchorLink>
						<Link className="nav-link" to="photography">
							Photography
						</Link>
						<AnchorLink
							className="nav-link"
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							onClick={this.closeNav}
						>
							Let's Talk
						</AnchorLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
