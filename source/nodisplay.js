import * as React from 'react';
import Base from './base';

const defaultStyle = {
	display: 'none'
};

const NoDisplay = ({ style, children, ...props}) => {
	return (
		<Base
			style={{
				...defaultStyle,
				...style
			}}
			{...props}
			>
			{children}
		</Base>
	);
};

NoDisplay.propTypes = {
	children: React.PropTypes.node,
	style: React.PropTypes.object
};

export default NoDisplay;
