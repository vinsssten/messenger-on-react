import React, {useState} from "react";
import Router from "./Router";

function App () {
    const [isAuthorized, setIsAuthorized] = useState(false);

    return (
        <Router isAuthorized={isAuthorized} />
    )
}

export default App