import React, { useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { LoginButton, LogoutButton } from '..';
import { BannerContainer, HeaderContainer } from '../containers';
  
function Home() {
	

	const [ isHeaderShown, setHeaderShown ] = useState(false);

	

	const handleOnScroll = (scrollTop: number) => {
		if (scrollTop > 100 && !isHeaderShown) {
			setHeaderShown(true);
		} else if (scrollTop <= 100 && isHeaderShown) {
			setHeaderShown(false);
		}
	};
	return (
		<Scrollbar noDefaultStyles className="main-scrollbar" onScroll={({ scrollTop }: any) => handleOnScroll(scrollTop)}>

			<HeaderContainer isHeaderShown={isHeaderShown} />
			
		    <BannerContainer/>
		</Scrollbar>
	);
}

export default Home;
