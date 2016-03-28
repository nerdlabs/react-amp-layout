import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {NoDisplay} from '../source/';
import Base from '../source/base';

test('<NoDisplay /> renders', t => {
	const vdom = render(<NoDisplay />);

	{
		const it = `should render the <Base /> component`;
		const actual = vdom.type;
		const expected = Base;

		t.is(actual, expected, it);
	}

	{
		const it = `should set display to none`;
		const actual = vdom.props.style.display;
		const expected = 'none';

		t.same(actual, expected, it);
	}
});

test('<NoDisplay /> passes `props` to <Base />', t => {
	const vdom = render(<NoDisplay className='test' />);

	const it = `should have a className of 'test'`;
	const actual = vdom.props.className;
	const expected = 'test';

	t.is(actual, expected, it);
});

test('<NoDisplay /> passes `children` to <Base />', t => {
	const vdom = render(<NoDisplay><i></i></NoDisplay>);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});
