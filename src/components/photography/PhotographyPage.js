import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as AnchorLink } from 'react-scroll';

import Gallery from 'react-photo-gallery';
import SocialIcons from '../common/SocialIcons';
import Lightbox from 'react-images';
import photos from './photos.json';

class Photography extends Component {
	constructor(props) {
		super(props);
		this.state = { currentImage: 0, view: 'people' };
		autoBind(this);
	}

	componentDidMount = () => {
		window.scrollTo(0, 0);
	};

	openLightbox(event, obj) {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
		});
	}

	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

	render() {
		let { view } = this.state;

		let gallery;
		switch (view) {
			case 'people':
				gallery = photos.people;
				break;
			case 'places':
				gallery = photos.places;
				break;
			case 'things':
				gallery = photos.things;
				break;
			default:
				gallery = [];
				break;
		}

		return (
			<div id="photography">
				<div className="section">
					<Row>
						<Col md={12} className="text-center">
							<h1 className="section-title">Photography</h1>
							<p>
								My passion for photography goes beyond satisfying my aesthetic needs (that's what web
								development is for). Photography takes me places but also introduces new faces. If you
								share this passion of mine and you're interested in collaborating, let's link up!
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={2} className="flex end">
							<div className="sidebar">
								<h5>@anhduhroo</h5>
								{Object.keys(photos).map((key, i) => (
									<span
										key={i}
										className={`nav-link ${key === view ? 'active' : ''}`}
										onClick={() => this.setState({ view: key }, () => console.log(this.state.view))}
									>
										{key}
									</span>
								))}
								<Link to="/" className="nav-link back">
									Back to Home
								</Link>
								<SocialIcons theme="dark" size="sm" />
							</div>
						</Col>
						<Col md={10}>
							<Gallery photos={gallery} onClick={this.openLightbox} />
						</Col>
						<AnchorLink className="btn" to="photography" spy={true} smooth={true} duration={500}>
							Back to Top
						</AnchorLink>
						<Lightbox
							images={gallery}
							onClose={this.closeLightbox}
							onClickPrev={this.gotoPrevious}
							onClickNext={this.gotoNext}
							currentImage={this.state.currentImage}
							isOpen={this.state.lightboxIsOpen}
						/>
					</Row>
				</div>
			</div>
		);
	}
}

export default Photography;
