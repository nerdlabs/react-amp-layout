import * as React from 'react';


const Container = ({ className, style, children, ...props}) => {
	return (
		<div
			className={className}
			style={style}
			{...props}
			>
			{children}
		</div>
	);
};

Container.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

export default Container;
