import React, { Component } from 'react';

import Footer from './common/Footer';
import MainPage from './home/MainPage';
import PhotographyPage from './photography/PhotographyPage';
import LoadingWrapper from './common/LoadingWrapper';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { rendered: false };
	}

	componentDidMount = () => {
		setTimeout(() => this.setState({ rendered: true }), 3000);
	};

	render() {
		return (
			<LoadingWrapper rendered={this.state.rendered}>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/photography" component={PhotographyPage} />
				</Switch>
				<Footer theme="dark" />
			</LoadingWrapper>
		);
	}
}

export default App;
