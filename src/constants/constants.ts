import { Feature } from "../components";

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const IMAGE_SIZES = {
	backdrop: {
		small: 'w300',
		xmedium: 'w780',
		medium: 'w1280',
		large: 'original'
	},
	poster: {
		small: 'w154',
		medium: 'w185',
		large: 'w342'
	},
	still: {
		small: 'w92'
	}
};
export const BACKDROP_PLACEHOLDER = 'https://plchldr.co/i/300x169?bg=333333&text=TyroFlix';
export const POSTER_PLACEHOLDER = 'https://plchldr.co/i/342x513?bg=333333&text=TyroFlix';
export const STILL_PLACEHOLDER = 'https://plchldr.co/i/185x104?bg=333333&text=TyroFlix';

export const HEADER_LINKS = [
	{
		title: 'TV Shows',
		value: 'series'
	},
	{
		title: 'Movies',
		value: 'movies'
	}
];

export const FAQS = [
	{
		id: 1,
		header: 'What is TyroFlix? Jamar',
		body:
			"TyroFlix is a FREE streaming service that offers tutorial and learning media to help you grow your skills to get the career you want.  There's always something new to discover, and new TV shows and movies are added every week!"
	},
	{
		id: 2,
		header: 'How much does TyroFlix cost?',
		body:
			'Watch TyroFlix on your smartphone, tablet, Smart TV, laptop or streaming device, all for FREE, FREE , yes FREE'
	},
	{
		id: 3,
		header: 'Where can I watch? Charlie',
		body:
			"Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Tyroflix account to watch instantly on the web at tyroflix.com from your personal computer or on any internet-connected device that offers the TyroFlix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take TyroFlix with you anywhere."
	},
	{
		id: 4,
		header: 'How do I cancel?  Zach',
		body:
			'TyroFlix is flexible. it is free , and we provide an easy delete account Feature.'
	},
	{
		id: 5,
		header: 'What can I watch on TyroFlix?',
		body:
			'TyroFlix has an extensive library of tutorials, documentaries, TV shows, award-winning TyroFlix originals, and more. Watch as much as you want, any time you want.'
	}
];

export const FEATURES = [
	{
		id: 1,
		title: 'Enjoy on your TV.',
		description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
		video: '',
		image: '/images/misc/Home-TV.jpg',
		alt: 'TyroFlix on TV'
	},
	{
		id: 2,
		title: 'Download your shows to watch offline.',
		description: 'Save your favorites easily and always have something to watch.',
		video: '',
		image: '/images/misc/Home-Mobile.jpg',
		alt: 'TyroFlix on mobile',
		direction: 'row-reverse'
	},
	{
		id: 3,
		title: 'Watch everywhere.',
		description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying more.',
		image: '/images/misc/Home-IMac.jpg',
		alt: 'TyroFlix on different devices'
	}
];

export const FOOTER_LINKS = [
	{ id: 1, text: 'FAQ', url: 'https://help.TyroFlix.com/support/412' },
	{ id: 2, text: 'Help Center', url: 'https://help.TyroFlix.com/' },
	{ id: 3, text: 'Account', url: 'https://www.TyroFlix.com/youraccount' },
	{ id: 4, text: 'Media Center', url: 'https://media.TyroFlix.com/' },
	{ id: 5, text: 'Investor Relations', url: 'http://ir.TyroFlix.com/' },
	{ id: 6, text: 'Jobs', url: 'https://jobs.TyroFlix.com/jobs' },
	{ id: 7, text: 'Redeem Gift Cards', url: 'https://www.TyroFlix.com/redeem' },
	{ id: 8, text: 'Buy Gift Cards', url: 'https://www.TyroFlix.com/gift-cards' },
	{ id: 9, text: 'Ways to Watch', url: 'https://www.TyroFlix.com/watch' },
	{ id: 10, text: 'Terms of Use', url: 'https://help.TyroFlix.com/legal/termsofuse' },
	{ id: 11, text: 'Privacy', url: 'https://help.TyroFlix.com/legal/privacy' },
	{ id: 12, text: 'Cookie Preferences', url: 'https://www.TyroFlix.com/ph/#' },
	{ id: 13, text: 'Corporate Information', url: 'https://help.TyroFlix.com/legal/corpinfo' },
	{ id: 14, text: 'Contact Us', url: 'https://help.TyroFlix.com/contactus' },
	{ id: 15, text: 'Speed Test', url: 'https://fast.com/' },
	{ id: 16, text: 'Legal Notices', url: 'https://help.TyroFlix.com/legal/notices' },
	{ id: 17, text: 'TyroFlix Originals', url: 'https://www.TyroFlix.com/ph/browse/genre/839338' }
];
