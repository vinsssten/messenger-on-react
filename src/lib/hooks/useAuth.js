import { useEffect, useState } from "react"

function useAuth () {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)  //false if fetch ok

    useEffect(() => {
        if (!token) {
            
        }
    }, [token])

    function successCallback () {

    }

    function errorCallback () {

    }
}