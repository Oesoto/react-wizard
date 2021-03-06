// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// COMPONENTS
import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
