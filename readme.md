# react-amp-layout
The [AMP](https://www.ampproject.org/)
[layout system](https://github.com/ampproject/amphtml/blob/master/spec/amp-html-layout.md)
ported to React.js as a couple of easy to use functional stateless components.


## Installation
```shell
npm install --save react-amp-layout
```

## Usage
Either require the default exported component `Layout`:
```javascript
import Layout from 'react-amp-layout';
```
or import the specific layout component you're interested in:
```javascript
import {FixedHeight} from 'react-amp-layout';
```

## Example
You can check out a live example and play around with the React.js or browser devtools
[here](https://cdn.rawgit.com/nerdlabs/react-amp-layout/a6f470ef0971432114f11784504da7f87bfe2dc6/examples/index.html).  
It takes a few seconds to load (transpilation is done in the browser) but after that it should
run fine.

## <3
The idea for this component is heavily inspired by the work of the awesome people working
on the AMP Project who have figured out the layout system and documented it.
