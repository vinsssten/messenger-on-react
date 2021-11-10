import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import validator from "validator";

function useNickname () {
    const [nickname, setNickname] = useState('');
    const [nicknameLocalStorage, setNicknameLocalStorage] = useState(null);
    const [isFirstGettingName, setIsFirstGettingName] = useState(true);
    const [isFirstSetName, setIsFirstSetName] = useState(true);
    const {socket, isSocketConnected} = useSelector(state => state.socket);
    
    useEffect(() => {
        if (isFirstGettingName) {
            const nickLS = localStorage.getItem('nickname');
            if (nickLS != null) {
                setNickname(nickLS)
                setNicknameOnServer(nickLS);
            }
            setIsFirstGettingName(false)
        }
    }, [isFirstGettingName])

    useEffect(() => {
        if (socket && isFirstSetName) {
            const nickLS = localStorage.getItem('nickname');
            if (nickLS != null) {
                setNicknameOnServer(nickLS);
                setIsFirstSetName(false);
            }
        }
    }, [isFirstSetName, socket])

    function onChangeNickname (event) {
        setNickname(event.target.value)
    }

    function setLocalStorageValue () {
        const userParams = {ignore_whitespace:true}
        if (!validator.isEmpty(nickname, userParams)) {
            localStorage.setItem('nickname', nickname);
            setNicknameOnServer(nickname)
        }
    }

    function setNicknameOnServer (name) {
        try {
            if (isSocketConnected) {
                socket.emit('setUsername', name);
            }
        } catch (err) {
            console.log('error while set name', err)
        }
    }

    return {nickname, onChangeNickname, nicknameLocalStorage, setLocalStorageValue}
}

export default useNickname