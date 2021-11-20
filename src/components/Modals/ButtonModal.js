import './ModalWindowPortal.css';

function ButtonModal({ action, children }) {
    return (
        <div className="modalWindow_MainButton" onClick={() => action()}>
            {children}
        </div>
    );
}

export default ButtonModal;
