import { combineReducers } from "redux";
import company from "./companyReducers";

const rootReducer = combineReducers({ company });
export default rootReducer;