import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as AnchorLink } from 'react-scroll';

import Gallery from 'react-photo-gallery';
import SocialIcons from '../common/SocialIcons';
import Lightbox from 'react-images';
import photos from './photos.json';

const Photography = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [view, setView] = useState('people');
	const [lightboxIsOpen, setOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const openLightbox = (event, obj) => {
		setCurrentImage(obj.index);
		setOpen(true);
	};

	const closeLightbox = () => {
		setCurrentImage(0);
		setOpen(false);
	};

	const gotoPrevious = () => {
		setCurrentImage(currentImage - 1);
	};

	const gotoNext = () => {
		setCurrentImage(currentImage + 1);
	};

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
							development is for). Photography not only takes me places but also introduces new faces. If
							you share this passion of mine and you're interested in collaborating, let's link up!
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
									onClick={() => setView(key)}
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
						<Gallery photos={gallery} onClick={openLightbox} />
					</Col>
					<AnchorLink className="btn" to="photography" spy={true} smooth={true} duration={500}>
						Back to Top
					</AnchorLink>
					<Lightbox
						images={gallery}
						onClose={closeLightbox}
						onClickPrev={gotoPrevious}
						onClickNext={gotoNext}
						currentImage={currentImage}
						isOpen={lightboxIsOpen}
					/>
				</Row>
			</div>
		</div>
	);
};

export default Photography;
