import * as TestUtils from 'react-addons-test-utils';

export default element => {
	const renderer = TestUtils.createRenderer();
	renderer.render(element);
	return renderer.getRenderOutput();
};
