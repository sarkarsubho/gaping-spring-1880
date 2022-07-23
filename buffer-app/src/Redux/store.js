import { legacy_createStore, combineReducers,applyMiddleware ,compose} from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReduser } from "./AuthReducer/reducer";

const rootReduser=combineReducers({
    AuthReduser
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReduser,composeEnhancers(applyMiddleware(thunk)))