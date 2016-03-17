import * as React from 'react';

const defaultStyle = {
	display: 'inline-block'
};


const Fixed = ({ children, className, height, style, width, ...props}) => {
	return (
		<div
			className={className}
			style={{
				...defaultStyle,
				height,
				width,
				...style
			}}
			{...props}
			>
			{children}
		</div>
	);
};

Fixed.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
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
