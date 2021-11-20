import { Provider } from "react-redux";
import './index.css'

import SocketDispatcher from "./components/MainPage/SocketDispatcher";
import TitleBarElectron from "./components/TitleBarElectron/TitleBarElectron";
import store from "./store/store";


function App () {
    return (
        <Provider store={store}>
            <div className="container">
                <TitleBarElectron />
                <SocketDispatcher />
            </div>
        </Provider>
    )
}

export default App