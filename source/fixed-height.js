import * as React from 'react';


const FixedHeight = ({ children, className, height, style, ...props}) => {
	return (
		<div
			className={className}
			style={{
				height,
				...style
			}}
			{...props}
			>
			{children}
		</div>
	);
};

FixedHeight.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]).isRequired,
	style: React.PropTypes.object,
	width: React.PropTypes.oneOf([undefined, 'auto'])
};

export default FixedHeight;
