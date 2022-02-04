import { createStore } from "redux";
import reducer from "./reducers/anecdoteReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer,
  filter: filterReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
