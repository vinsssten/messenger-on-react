import { combineReducers } from "redux";
import socketReducer from "./reducers/socketReducer";
import testDataReducer from "./reducers/testDataReducer";

const rootReducer = combineReducers({
    socket: socketReducer,
    testData: testDataReducer
})

export default rootReducer