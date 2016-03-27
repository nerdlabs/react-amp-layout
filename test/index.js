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

test('When "type" is not present', t => {
	const vdom = render(<Layout />);

	const it = `should render an element of type Container`;
	const actual = vdom.type;
	const expected = Container;

	t.is(actual, expected, it);
});

test('When "type" is not present, width and sizes is set', t => {
	const vdom = render(
		<Layout width="320" sizes={['(min-width: 600px) 200px', '50vw']} />
	);

	const it = `should render an element of type Responsive`;
	const actual = vdom.type;
	const expected = Responsive;

	t.is(actual, expected, it);
});

test('When "type" is not present, width and heights is set', t => {
	const vdom = render(
		<Layout width="320" heights={['(min-width:500px) 200px', '80%']} />
	);

	const it = `should render an element of type Responsive`;
	const actual = vdom.type;
	const expected = Responsive;

	t.is(actual, expected, it);
});

test('When "type" is not present, height and sizes is set', t => {
	const vdom = render(
		<Layout height="256" sizes={['(min-width: 600px) 200px', '50vw']} />
	);

	const it = `should render an element of type Responsive`;
	const actual = vdom.type;
	const expected = Responsive;

	t.is(actual, expected, it);
});

test('When "type" is not present, height and heights is set', t => {
	const vdom = render(
		<Layout height="256" heights={['(min-width:500px) 200px', '80%']} />
	);

	const it = `should render an element of type Responsive`;
	const actual = vdom.type;
	const expected = Responsive;

	t.is(actual, expected, it);
});

test('When "type" is not present and height is set', t => {
	const vdom = render(<Layout height="50%" />);

	const it = `should render an element of type FixedHeight`;
	const actual = vdom.type;
	const expected = FixedHeight;

	t.is(actual, expected, it);
});

test('When "type" is not present, height is set and width is auto', t => {
	const vdom = render(<Layout height="50%" width="auto" />);

	const it = `should render an element of type FixedHeight`;
	const actual = vdom.type;
	const expected = FixedHeight;

	t.is(actual, expected, it);
});

test('When "type" is not present and width and height are set', t => {
	const vdom = render(
		<Layout width="500" height="100" />
	);

	const it = `should render an element of type Fixed`;
	const actual = vdom.type;
	const expected = Fixed;

	t.is(actual, expected, it);
});

test('When "type" is not present and only width is set', t => {
	const vdom = render(
		<Layout width="250" />
	);

	const it = `should render an element of type Fixed`;
	const actual = vdom.type;
	const expected = Fixed;

	t.is(actual, expected, it);
});
