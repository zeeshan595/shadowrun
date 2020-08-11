import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./View/App.connect";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, AnyAction } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./Controller/Root";
import "Style.scss";

const middleware = [];
if (process.env.NODE_ENV == "development") {
  middleware.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middleware));
window.setInterval(() => {}, 100);

const appWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById("app"));
