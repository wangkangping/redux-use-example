import { createStore } from 'redux';
import reducers from '../reducers';
// For debugging in google devtool of Redux
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(reducers, composeWithDevTools());

export default store;
