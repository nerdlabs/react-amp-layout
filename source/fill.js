import * as React from 'react';
import Base from './base';

const defaultStyle = {
	display: 'block',
	overflow: 'hidden',
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0
};

const Fill = ({ style, children, ...props}) => {
	return (
		<Base
			style={{
				...defaultStyle,
				...style
			}}
			{...props}
			>
			{children}
		</Base>
	);
};

Fill.propTypes = {
	children: React.PropTypes.node,
	style: React.PropTypes.object
};

export default Fill;
