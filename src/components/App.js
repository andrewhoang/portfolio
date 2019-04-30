import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './home/MainPage';
import NotFound from './NotFound';
import PhotographyPage from './photography/PhotographyPage';
import LoadingWrapper from './common/LoadingWrapper';
import Footer from './common/Footer';

const App = () => {
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		console.log(
			`%c 👋 Hello! If you're interested in anything that you've seen, please feel free to contact me at andrw.hoang@gmail.com.`,
			'color: white; text-align: center; padding-bottom: 15px'
		);
		setTimeout(() => setRendered(true), 3000);
	}, []);

	return (
		<LoadingWrapper rendered={rendered}>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/photography" component={PhotographyPage} />
				<Route path="*" component={NotFound} />
			</Switch>
			<Footer theme="dark" />
		</LoadingWrapper>
	);
};

export default App;
