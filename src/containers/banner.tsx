import React from 'react';
import { Banner } from '../components';
import SubscribeContainer from './subscribe';

function BannerContainer() {
	return (
		<Banner>
			<Banner.Title>Unlimited tutorials, learning TV shows, and more.</Banner.Title>
			<Banner.SubTitle>Watch anywhere. Free All the Time.</Banner.SubTitle>
			<SubscribeContainer />
		</Banner>
	);
}

export default BannerContainer;
