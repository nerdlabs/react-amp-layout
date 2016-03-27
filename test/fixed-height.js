import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {FixedHeight} from '../source/';

test('FixedHeight renders', t => {
	const vdom = render(<FixedHeight />);

	const it = `should render an element of type div`;
	const actual = vdom.type;
	const expected = 'div';

	t.is(actual, expected, it);
});

test('FixedHeight renders props passed to component', t => {
	const vdom = render(
		<FixedHeight className="test" style={{color: 'red'}} />
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

test('FixedHeight renders children passed into component', t => {
	const vdom = render(
		<FixedHeight><i></i></FixedHeight>
	);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});

test('FixedHeight renders height prop as style', t => {
	const vdom = render(<FixedHeight height="50%" />);

	const it = `should set style.height to "50%"`;
	const actual = vdom.props.style.height;
	const expected = '50%';

	t.same(actual, expected, it);
});
