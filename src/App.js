import { Provider } from "react-redux";
import store from "./store/store";
import SocketDispatcher from "./components/MainPage/SocketDispatcher";

function App () {
    return (
        <Provider store={store}>
            <SocketDispatcher />
        </Provider>
    )
}

export default App