import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
	const { logout } = useAuth0();
	const { user, isAuthenticated, isLoading } = useAuth0();
	if (!isLoading && isAuthenticated) {
		 console.log(user);
	} else {
		console.log("not logged in")
	}
	return (
		<div>
			
	  <button onClick={() => logout({ returnTo: window.location.origin })}>
		Log Out
	  </button>
	  </div>
	);
  };


ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Auth0Provider
			domain="dev-84vaxfa6.us.auth0.com"
			clientId="yHdPgT52L5c2P4EB1zUDaXsZGUakzUjt"
			redirectUri={window.location.origin}
		>	<App />
		<LoginButton/>
			<LogoutButton/>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
