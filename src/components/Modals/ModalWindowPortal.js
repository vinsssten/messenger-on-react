import { useEffect } from 'react';
import reactDom from 'react-dom'
import { useSelector } from 'react-redux';
import './ModalWindowPortal.css'

function ModalWindowPortal ({children, isActive, setIsActive, permissionToCloseModal}) {
    const chatIsActive = useSelector(state => state.chat.chatIsActive);

    useEffect(() => {
        if (chatIsActive) {
            setIsActive(false);
        }
    }, [chatIsActive])

    function closeWindow (event) {
        if (event.target.id === 'modalBackground' && permissionToCloseModal) {
            setIsActive(!isActive)
        } else {
            return;
        }
    }
    
    if (isActive) {
        return reactDom.createPortal(
            <div
                id='modalBackground'
                className='modalWindow_Background'
                onClick={closeWindow}>
                <div className='modalWindow'>
                    {children}
                </div>
            </div>,
            document.getElementById('root')
        )
    } else return <></>
}

export default ModalWindowPortal