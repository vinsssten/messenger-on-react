import { combineReducers } from "redux";
import appStateReducer from "./reducers/appStateReducer";
import chatStateReducer from "./reducers/chatStateReducer";
import socketReducer from "./reducers/socketReducer";
import testDataReducer from "./reducers/testDataReducer";

const rootReducer = combineReducers({
    socket: socketReducer,
    testData: testDataReducer,
    app: appStateReducer,
    chat: chatStateReducer,
})

export default rootReducer