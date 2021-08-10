import {createStore as reduxCreateStore, combineReducers, applyMiddleware} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import {UsersReducer} from "../users/reducers";
import {ProductsReducer} from "../products/reducers";

import thunk from "redux-thunk";
import { createLogger } from "redux-logger";


export default function createStore(history){
    const logger = createLogger({
        collapsed:true,
        diff:true
    });

    return reduxCreateStore(
        combineReducers({
            router:connectRouter(history),
            users:UsersReducer,
            products:ProductsReducer,
        }),
        applyMiddleware(
            logger,
            routerMiddleware(history),
            thunk
        )
    )
}