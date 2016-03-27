import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {Fixed} from '../source/';

test('Fixed renders', t => {
	const vdom = render(<Fixed />);

	{
		const it = `should render an element of type div`;
		const actual = vdom.type;
		const expected = 'div';

		t.is(actual, expected, it);
	}

	{
		const it = `should set display to inline-block`;
		const actual = vdom.props.style.display;
		const expected = 'inline-block';

		t.same(actual, expected, it);
	}
});

test('Fixed renders props passed to component', t => {
	const vdom = render(
		<Fixed className="test" style={{color: 'red'}} />
	);

	{
		const it = `should have a className of "test"`;
		const actual = vdom.props.className;
		const expected = 'test';

		t.is(actual, expected, it);
	}

	{
		const it = `should set the style props`;
		const actual = vdom.props.style.color;
		const expected = 'red';

		t.same(actual, expected, it);
	}
});

test('Fixed renders children passed into component', t => {
	const vdom = render(
		<Fixed><i></i></Fixed>
	);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});

test('Fixed renders width/height props as style', t => {
	const vdom = render(<Fixed width={100} height="50%" />);

	{
		const it = `should set style.width to 100`;
		const actual = vdom.props.style.width;
		const expected = 100;

		t.same(actual, expected, it);
	}

	{
		const it = `should set style.height to "50%"`;
		const actual = vdom.props.style.height;
		const expected = '50%';

		t.same(actual, expected, it);
	}
});
