import React, { Component } from 'react';

import { Row, Col, Carousel } from 'react-bootstrap';
import SkillsComponent from './SkillsComponent';
import SocialIcons from '../common/SocialIcons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import image from '../../assets/img/DP2019.jpg';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = { entered: false, index: 0, direction: null };
	}

	handleSelect = (selectedIndex, e) => {
		this.setState({ index: selectedIndex, direction: e }, () =>
			setTimeout(() => this.setState({ entered: true }), 100)
		);
	};

	render = () => {
		let { entered, index, direction } = this.state;

		return (
			<div id="about" className="section">
				<div className="carousel-container">
					<h1 className="text-center section-title">About Me</h1>
					<Carousel
						activeIndex={index}
						direction={direction}
						controls={true}
						indicators={false}
						interval={0}
						onSelect={this.handleSelect}
						nextIcon={<FontAwesomeIcon className="toggle icon-md" icon={faChevronRight} />}
						prevIcon={<FontAwesomeIcon className="toggle icon-md" icon={faChevronLeft} />}
					>
						<Carousel.Item>
							<Row>
								<Col lg={4} sm={12} className="flex text-right">
									<div className="display-pic-container">
										<div className="display-pic-border" />
										<img src={image} alt="dp" className="display-pic" />
									</div>
									<SocialIcons theme="dark" />
								</Col>
								<Col lg={8} sm={12}>
									<p className="about-text">
										Hi! I'm Andrew, and I am a <strong>web developer</strong> who is passionate
										about front-end design and back-end technologies. I enjoy solving problems
										through <em>minimalist</em> design and <em>clean</em> code.
										<br />
										<br />I graduated from Bentley University with a degree in Accounting &
										Information Systems, but I soon discovered my passion for web development as it
										combined my two loves for art and technology. Through the course of my
										professional work, I've designed and developed intuitive and responsive websites
										and web apps for a wide variety of industries. I've taken what I've learned to
										start my own side projects, including rebuilding this website with React
										(previously static HTML and jQuery). Outside of web development, I enjoy
										photography, music, tennis, and traveling. Under my photography page, you’ll
										find photos from my travels.
									</p>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row>
								<Col md={12} xs={12}>
									<SkillsComponent entered={entered} />
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
	};
}

export default About;
