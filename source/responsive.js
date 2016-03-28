import * as React from 'react';
import Base from './base';

const wrapperStyle = {
	position: 'relative',
	height: 0
};

const stretchStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0
};

const Responsive = ({ children, height, style, width, ...props}) => {
	return (
		<Base
			style={{
				...wrapperStyle,
				paddingBottom: `${(height / width) * 100}%`,
				...style
			}}
			{...props}
			>
			<div style={stretchStyle}>
				{children}
			</div>
		</Base>
	);
};

Responsive.propTypes = {
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

export default Responsive;
