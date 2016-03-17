import * as React from 'react';

const defaultStyle = {
	display: 'block',
	overflow: 'hidden',
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0
};


const Fill = ({ className, style, children, ...props}) => {
	return (
		<div
			className={className}
			style={{
				...defaultStyle,
				...style
			}}
			{...props}
			>
			{children}
		</div>
	);
};

Fill.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

export default Fill;
