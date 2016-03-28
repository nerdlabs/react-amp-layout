import * as React from 'react';
import Base from './base';

const Container = ({ children, ...props}) => {
	return (
		<Base {...props}>
			{children}
		</Base>
	);
};

Container.propTypes = {
	children: React.PropTypes.node
};

export default Container;
