import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css' 			//样式引入

import App from './App';

//create-react-app 生成的项目中，多了一个registerServiceWorker.js，并且在 index.js 中引用

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<App />, 
	document.getElementById('root')
	);

registerServiceWorker();
