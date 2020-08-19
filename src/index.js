import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from "./store";
import APP from "./containers";

ReactDOM.render(
    <Provider store={store}>
        <APP />
    </Provider>,
  document.getElementById('root')
);

