import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {Fill} from '../source/';
import Base from '../source/base';

test('<Fill /> renders', t => {
	const vdom = render(<Fill />);

	const it = `should render the <Base /> component`;
	const actual = vdom.type;
	const expected = Base;

	t.is(actual, expected, it);
});

test('<Fill /> renders default style', t => {
	const vdom = render(<Fill />);

	const it = `should render default styles`;
	const actual = vdom.props.style;
	const expected = {
		display: 'block',
		overflow: 'hidden',
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	};

	t.same(actual, expected, it);
});

test('<Fill /> passes `props` to <Base />', t => {
	const vdom = render(<Fill className='test' />);

	const it = `should have a className of 'test'`;
	const actual = vdom.props.className;
	const expected = 'test';

	t.is(actual, expected, it);
});

test('<Fill /> passes `children` to <Base />', t => {
	const vdom = render(<Fill><i></i></Fill>);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});
