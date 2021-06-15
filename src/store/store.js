import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer";
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";

const initialState = {};

const middleware = [thunk];
export const history = createBrowserHistory()

const store = createStore(rootReducer(history),initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store; 