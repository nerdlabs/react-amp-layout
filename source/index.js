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

const determineType = ({ height, heights, sizes, width }) => {
	const hasHeight = typeof height !== 'undefined';
	const hasHeights = typeof heights !== 'undefined';
	const hasSizes = typeof sizes !== 'undefined';
	const hasWidth = typeof width !== 'undefined';

	if (!hasWidth && !hasHeight) {
		return Container;
	} else if ((hasWidth || hasHeight) && (hasSizes || hasHeights)) {
		return Responsive;
	} else if (hasHeight && (!hasWidth || width === 'auto')) {
		return FixedHeight;
	} else {
		return Fixed;
	}
};


const Layout = ({ children, className, style, type, ...props}) => {
	const Component = (type && typeMap[type]) || determineType(props);
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
