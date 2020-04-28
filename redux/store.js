import { createStore, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

import reducer from "./reducers"

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export function initializeStore(initialState) {
    const store = createStore(reducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept("./reducers", () =>
            store.replaceReducer(require("./reducers").default)
        );
    }
    return store
}