import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {Fill} from '../source/';

test('Fill renders', t => {
	const vdom = render(<Fill />);

	const it = `should render an element of type div`;
	const actual = vdom.type;
	const expected = 'div';

	t.is(actual, expected, it);
});

test('Fill renders default style', t => {
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

test('Fill renders props passed to component', t => {
	const vdom = render(
		<Fill className="test" style={{color: 'red'}} />
	);

	{
		const it = `should have a className of "test"`;
		const actual = vdom.props.className;
		const expected = 'test';

		t.is(actual, expected, it);
	}

	{
		const it = `should set the style prop correctly`;
		const actual = vdom.props.style.color;
		const expected = 'red';

		t.same(actual, expected, it);
	}
});

test('Fill renders children passed into component', t => {
	const vdom = render(
		<Fill><i></i></Fill>
	);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});
