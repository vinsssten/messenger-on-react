import './MainPage.css'

function MainCardTemplate ({children}) {
    return (
        <div className="mainPage_Container">
            <div className="mainPage_Header">Messenger on React</div>
            <div className="mainPage_Content">
                <div className="mainPage_ConnectionInfo">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainCardTemplate