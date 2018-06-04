import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './components/app'
import {counter} from './redux/reducers'

//create a store object

const store = createStore(counter);

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById("root"));
}

render();

store.subscribe(render);
