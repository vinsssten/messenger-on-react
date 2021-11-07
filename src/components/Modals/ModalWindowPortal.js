import reactDom from 'react-dom'
import './ModalWindowPortal.css'

function ModalWindowPortal ({children, isActive, setIsActive}) {

    function closeWindow (event) {
        if (event.target.id === 'modalBackground') {
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