import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (user === undefined || isLoading || !isAuthenticated) {
		return <button onClick={() => loginWithRedirect()}>Log In</button>;
	} else {

		return <React.Fragment>{user.email}</React.Fragment>
	}
};

export const LogoutButton = () => {
	const { logout } = useAuth0();
	const { user, isAuthenticated, isLoading } = useAuth0();
	if (!isLoading && isAuthenticated) {
		console.log(user);
		return (
			<React.Fragment>
				<button onClick={() => logout({ returnTo: window.location.origin })}>
					Log Out
				</button>
			</React.Fragment>
		);
	} else {
		console.log("not logged in")
		return (
			<React.Fragment>
				-
			</React.Fragment>
		);
	}

};


ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Auth0Provider
			domain="dev-84vaxfa6.us.auth0.com"
			clientId="yHdPgT52L5c2P4EB1zUDaXsZGUakzUjt"
			redirectUri={window.location.origin}
		>

			<App />

		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
