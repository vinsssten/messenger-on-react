import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import './index.css';

import SocketDispatcher from './components/MainPage/SocketDispatcher';
import TitleBarElectron from './components/TitleBarElectron/TitleBarElectron';
import store from './store/store';

function App() {
    const [isElectronApp, setIsElectronApp] = useState(false);

    // useEffect(() => {
    //     if (window?.ipc) {
    //         setIsElectronApp(true);
    //     }
    // }, [])

    return (
        <Provider store={store}>
            {/* <div className="container"> */}
            {isElectronApp ? <TitleBarElectron /> : null}
            <SocketDispatcher />
            {/* </div> */}
        </Provider>
    );
}

export default App;
