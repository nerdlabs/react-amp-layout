import * as React from 'react';

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


const Responsive = ({ children, className, height, style, width, ...props}) => {
	return (
		<div
			className={className}
			style={{
				...wrapperStyle,
				paddingBottom: `${(height / width) * 100}%`,
				...style
			}}
			{...props}>
			<div
				style={stretchStyle}
				>
				{children}
			</div>
		</div>
	);
};

Responsive.propTypes = {
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

export default Responsive;
