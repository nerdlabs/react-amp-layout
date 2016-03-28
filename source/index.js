import * as React from 'react';

import Container from './container';
import Fill from './fill';
import Fixed from './fixed';
import FixedHeight from './fixed-height';
import NoDisplay from './nodisplay';
import Responsive from './responsive';

const typeMap = {
	container: Container,
	fill: Fill,
	fixed: Fixed,
	'fixed-height': FixedHeight,
	nodisplay: NoDisplay,
	responsive: Responsive
};

const determineType = ({ height, heights, sizes, type, width }) => {
	if (type && typeof typeMap[type] !== 'undefined') {
		return typeMap[type];
	}

	const hasHeight = typeof height !== 'undefined';
	const hasHeights = typeof heights !== 'undefined';
	const hasSizes = typeof sizes !== 'undefined';
	const hasWidth = typeof width !== 'undefined';

	if (!hasHeight && !hasWidth) {
		return Container;
	} else if (hasHeight && (!hasWidth || width === 'auto')) {
		return FixedHeight;
	} else if (hasHeight && hasWidth && (hasHeights || hasSizes)) {
		return Responsive;
	} else {
		return Fixed;
	}
};


const Layout = ({ children, className, style, type, ...props}) => {
	const Component = determineType(props);
	return (
		<Component
			className={className}
			style={style}
			{...props}
			>
			{children}
		</Component>
	);
};

Layout.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	fallback: React.PropTypes.bool,
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	heights: React.PropTypes.arrayOf(
		React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		])
	),
	media: React.PropTypes.string,
	noloading: React.PropTypes.bool,
	placeholder: React.PropTypes.bool,
	sizes: React.PropTypes.arrayOf(React.PropTypes.string),
	style: React.PropTypes.object,
	type: React.PropTypes.oneOf([
		'container',
		'fill',
		'fixed',
		'fixed-height',
		'nodisplay',
		'responsive'
	]),
	width: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	])
};


export {
	Container,
	Fill,
	Fixed,
	FixedHeight,
	NoDisplay,
	Responsive,
	Layout as default
};
