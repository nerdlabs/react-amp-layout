import * as React from 'react';

const Base = ({ style, children, ...props}) => {
	return (
		<div
			style={style}
			{...props}
			>
			{children}
		</div>
	);
};

Base.propTypes = {
	children: React.PropTypes.node,
	style: React.PropTypes.object
};

export default Base;
