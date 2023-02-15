import { combineReducers } from "redux";
import customer from "../features/customer/reducer";

const rootReducer = combineReducers({
  customer,
});

export default rootReducer;
