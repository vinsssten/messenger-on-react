import { useEffect } from 'react';
import reactDom from 'react-dom'
import { useSelector } from 'react-redux';
import './ModalWindowPortal.css'

function ModalWindowPortal ({children, findModalActive, toggleFindModal}) {
    const chatIsActive = useSelector(state => state.chat.chatIsActive);
    const waitConfirmationChat = useSelector(state => state.app.waitConfirmationChat)

    useEffect(() => {
        if (chatIsActive) {
            toggleFindModal()
        }
    }, [chatIsActive])

    function closeWindow (event) {
        console.log('waitConfirmationChat', waitConfirmationChat)
        if (event.target.id === 'modalBackground' && !waitConfirmationChat) {
            toggleFindModal()
        } else {
            console.log('close reject')
            return;
        }
    }
    
    if (findModalActive) {
        console.log('findModalActive')
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