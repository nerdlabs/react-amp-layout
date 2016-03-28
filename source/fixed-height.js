import * as React from 'react';
import Base from './base';

const FixedHeight = ({ children, height, style, ...props}) => {
	return (
		<Base
			style={{
				height,
				...style
			}}
			{...props}
			>
			{children}
		</Base>
	);
};

FixedHeight.propTypes = {
	children: React.PropTypes.node,
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]).isRequired,
	style: React.PropTypes.object,
	width: React.PropTypes.oneOf([undefined, 'auto'])
};

export default FixedHeight;
