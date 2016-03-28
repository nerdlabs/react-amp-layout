import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {FixedHeight} from '../source/';
import Base from '../source/base';

test('<FixedHeight /> renders', t => {
	const vdom = render(<FixedHeight />);

	const it = `should render the <Base /> component`;
	const actual = vdom.type;
	const expected = Base;

	t.is(actual, expected, it);
});

test('<FixedHeight /> passes `props` to <Base />', t => {
	const vdom = render(<FixedHeight className='test' />);

	const it = `should have a className of 'test'`;
	const actual = vdom.props.className;
	const expected = 'test';

	t.is(actual, expected, it);
});

test('<FixedHeight /> passes `children` to <Base />', t => {
	const vdom = render(<FixedHeight><i></i></FixedHeight>);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});

test('<FixedHeight /> renders height prop as style', t => {
	const vdom = render(<FixedHeight height='50%' />);

	const it = `should set style.height to '50%'`;
	const actual = vdom.props.style.height;
	const expected = '50%';

	t.same(actual, expected, it);
});
