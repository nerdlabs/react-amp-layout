import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {NoDisplay} from '../source/';

test('NoDisplay renders', t => {
	const vdom = render(<NoDisplay />);

	{
		const it = `should render an element of type div`;
		const actual = vdom.type;
		const expected = 'div';

		t.is(actual, expected, it);
	}

	{
		const it = `should set display to none`;
		const actual = vdom.props.style.display;
		const expected = 'none';

		t.same(actual, expected, it);
	}
});

test('NoDisplay renders props passed to component', t => {
	const vdom = render(
		<NoDisplay className="test" style={{color: 'red'}} />
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

test('NoDisplay renders children passed into component', t => {
	const vdom = render(
		<NoDisplay><i></i></NoDisplay>
	);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});
