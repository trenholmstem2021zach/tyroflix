import { Home, Browse, Signin, Signup } from '../pages';
import PPolicy from '../pages/PPolicy';

type Routes = {
	[key: string]: {
		path: string;
		page: JSX.Element;
		isProtected: boolean;
	};
};

export const ROUTES: Routes = {
	HOME: { path: '/', page: <Home />, isProtected: false },
	PRIVACYPOLICY: { path: '/privacy', page: <PPolicy />, isProtected: false },
	BROWSE: { path: '/browse', page: <Browse />, isProtected: true },
	SIGNUP: { path: '/signup', page: <Signup />, isProtected: false },
	SIGNIN: { path: '/signin', page: <Signin />, isProtected: false }
};
