import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import reducer from "./reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
