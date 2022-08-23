import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Auth0Provider
			domain="dev-84vaxfa6.us.auth0.com"
			clientId="yHdPgT52L5c2P4EB1zUDaXsZGUakzUjt"
			redirectUri={window.location.origin}
		>	<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
