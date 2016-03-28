import * as React from 'react';

const Container = ({ style, children, ...props}) => {
	return (
		<div
			style={style}
			{...props}
			>
			{children}
		</div>
	);
};

Container.propTypes = {
	children: React.PropTypes.node,
	style: React.PropTypes.object
};

export default Container;
