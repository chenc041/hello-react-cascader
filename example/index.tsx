import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Demo from './app';

// @ts-ignore
const render = Component => ReactDOM.render(<Component />, document.getElementById('root'));

render(Demo);
