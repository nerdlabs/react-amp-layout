import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import Base from '../source/base';

test('<Base /> renders', t => {
	const vdom = render(<Base />);

	const it = `should render an element of type 'div'`;
	const actual = vdom.type;
	const expected = 'div';

	t.is(actual, expected, it);
});

test('<Base /> renders props passed to component', t => {
	const vdom = render(
		<Base className='test' style={{backgroundColor: 'red'}} />
	);

	{
		const it = `should have a className of 'test'`;
		const actual = vdom.props.className;
		const expected = 'test';

		t.is(actual, expected, it);
	}

	{
		const it = `should set the style prop correctly`;
		const actual = vdom.props.style;
		const expected = {backgroundColor: 'red'};

		t.same(actual, expected, it);
	}
});

test('<Base /> renders children passed into component', t => {
	const vdom = render(<Base><i></i></Base>);

	const it = `should render children`;
	const actual = vdom.props.children;
	const expected = (<i></i>);

	t.same(actual, expected, it);
});
