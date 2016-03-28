import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {
	Container,
	Fill,
	Fixed,
	FixedHeight,
	NoDisplay,
	Responsive,
	default as Layout
} from '../source/';

test('When neither `type` nor `height` or `width` are set', t => {
	const vdom = render(<Layout />);

	const it = `should render an element of type <Container />`;
	const actual = vdom.type;
	const expected = Container;

	t.is(actual, expected, it);
});

test('When `type` is not present and only `height` is set', t => {
	const vdom = render(<Layout height='50%' />);

	const it = `should render an element of type <FixedHeight />`;
	const actual = vdom.type;
	const expected = FixedHeight;

	t.is(actual, expected, it);
});

test('When `type` is not present, `height` is set and `width` is not set or auto', t => {
	const vdom = render(<Layout height='50%' width='auto' />);

	const it = `should render an element of type <FixedHeight />`;
	const actual = vdom.type;
	const expected = FixedHeight;

	t.is(actual, expected, it);
});

test('When `type` is not present and `width`, `height` and `heights` are set', t => {
	const vdom = render(
		<Layout
			width='500'
			height='100'
			heights={['(min-width:500px) 200px', '80%']}
			/>
	);

	const it = `should render an element of type <Responsive />`;
	const actual = vdom.type;
	const expected = Responsive;

	t.is(actual, expected, it);
});

test('When `type` is not present and `width`, `height` and `sizes` are set', t => {
	const vdom = render(
		<Layout
			width='320'
			height='100'
			sizes={['(min-width: 600px) 200px', '50vw']}
			/>
	);

	const it = `should render an element of type <Responsive />`;
	const actual = vdom.type;
	const expected = Responsive;

	t.is(actual, expected, it);
});

test('When `type` is not present and `width` and `height` are set', t => {
	const vdom = render(
		<Layout width='500' height='100' />
	);

	const it = `should render an element of type <Fixed />`;
	const actual = vdom.type;
	const expected = Fixed;

	t.is(actual, expected, it);
});

test('When `type` is not present and only `width` is set', t => {
	const vdom = render(
		<Layout width='250' />
	);

	const it = `should render an element of type <Fixed />`;
	const actual = vdom.type;
	const expected = Fixed;

	t.is(actual, expected, it);
});
