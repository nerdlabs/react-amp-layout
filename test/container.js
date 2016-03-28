import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {Container} from '../source/';
import Base from '../source/base';

test('<Container /> renders', t => {
	const vdom = render(<Container />);

	const it = `should render the <Base /> component`;
	const actual = vdom.type;
	const expected = Base;

	t.is(actual, expected, it);
});

test('<Container /> passes `props` to <Base />', t => {
	const vdom = render(<Container className='test' />);

	const it = `should have a className of 'test'`;
	const actual = vdom.props.className;
	const expected = 'test';

	t.is(actual, expected, it);
});

test('<Container /> passes `children` to <Base />', t => {
	const vdom = render(<Container><i></i></Container>);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});
