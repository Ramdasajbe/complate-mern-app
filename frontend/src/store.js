import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, userReducer } from "./reducers/user-reducer";

const initialState = {};
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
