import React, {useState} from "react";
import Router from "./Router";

function App () {
    const [isAuthorized, setIsAuthorized] = useState(true);

    return (
        <Router isAuthorized={isAuthorized} />
    )
}

export default App