import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './assets/styles/styles.scss';
import '../node_modules/animate.css/animate.min.css';
import App from './components/App';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);
