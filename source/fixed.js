import * as React from 'react';
import Base from './base';

const defaultStyle = {
	display: 'inline-block'
};

const Fixed = ({ children, height, style, width, ...props}) => {
	return (
		<Base
			style={{
				...defaultStyle,
				height,
				width,
				...style
			}}
			{...props}
			>
			{children}
		</Base>
	);
};

Fixed.propTypes = {
	children: React.PropTypes.node,
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]).isRequired,
	style: React.PropTypes.object,
	width: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]).isRequired
};

export default Fixed;
