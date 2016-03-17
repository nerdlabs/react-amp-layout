import * as React from 'react';

const defaultStyle = {
	display: 'none'
};


const NoDisplay = ({ className, style, children, ...props}) => {
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

NoDisplay.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

export default NoDisplay;
