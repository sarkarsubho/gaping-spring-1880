import { legacy_createStore, combineReducers,applyMiddleware ,compose} from "redux";
import thunk from "redux-thunk";
import { reduser as AuthReduser } from "./Auth/reduser";

const rootReduser=combineReducers({
    auth:AuthReduser
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReduser,composeEnhancers(applyMiddleware(thunk)))