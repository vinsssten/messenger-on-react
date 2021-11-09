import { combineReducers } from "redux";
import appStateReducer from "./reducers/appStateReducer";
import socketReducer from "./reducers/socketReducer";
import testDataReducer from "./reducers/testDataReducer";

const rootReducer = combineReducers({
    socket: socketReducer,
    testData: testDataReducer,
    app: appStateReducer,
})

export default rootReducer