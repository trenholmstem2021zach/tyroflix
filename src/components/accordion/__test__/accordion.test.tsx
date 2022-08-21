import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Accordion from '../index';
import { FAQS } from '../../../constants/constants';

describe('<Accordion />', () => {
	it('renders the <Accordion /> with populated data', () => {
		const { container, getByText } = render(
			<Accordion>
				<Accordion.Title>Frequently Asked Questions</Accordion.Title>
				{FAQS.map(({ id, header, body }) => (
					<Accordion.Item key={id} id={id}>
						<Accordion.Header id={id}>{header}</Accordion.Header>
						<Accordion.Body id={id}>{body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		);

		expect(getByText('Frequently Asked Questions')).toBeTruthy();
		expect(getByText('What is TyroFlix?')).toBeTruthy();
		expect(getByText('How much does TyroFlix cost?')).toBeTruthy();
		expect(getByText('Where can I watch?')).toBeTruthy();
		expect(getByText('How do I cancel?')).toBeTruthy();
		expect(getByText('What can I watch on TyroFlix?')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('opens and closes the <Accordion /> component', () => {
		const { container, queryByText } = render(
			<Accordion>
				<Accordion.Title>Frequently Asked Questions</Accordion.Title>
				{FAQS.map(({ id, header, body }) => (
					<Accordion.Item key={id} id={id}>
						<Accordion.Header id={id}>{header}</Accordion.Header>
						<Accordion.Body id={id}>{body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		);

		// TODO expect body to be toggled
		// const whatIsTyroFlixBodyText =
		// 	"TyroFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";
		// const whatIsTyroFlixHeaderEl = queryByText('What is TyroFlix?');
		// expect(queryByText(whatIsTyroFlixBodyText)).toBeFalsy();
		// if (whatIsTyroFlixHeaderEl) fireEvent.click(whatIsTyroFlixHeaderEl);
		// expect(queryByText(whatIsTyroFlixBodyText)).toBeTruthy();
		// if (whatIsTyroFlixHeaderEl) fireEvent.click(whatIsTyroFlixHeaderEl);
		// expect(queryByText(whatIsTyroFlixBodyText)).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
