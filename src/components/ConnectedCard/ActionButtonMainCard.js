import './ConnectedCard.css'

function ActionButtonMainCard ({action, children}) {
    return (
        <div 
            className="mainPage_MainButton"
            onClick={() => action()}>
            {children}
        </div>
    )
}

export default ActionButtonMainCard