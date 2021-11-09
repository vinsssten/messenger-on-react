import useNickname from '../../lib/hooks/useNickname'
import './NicknameInputCard.css'

function NicknameInputCard () {
    const {nickname, onChangeNickname, setLocalStorageValue} = useNickname();

    return (
        <div className="mainPage_InputNameContainer">
            <div className="mainPage_InputCard">
                <div className="inputCard_TextField">
                    <h1 className="inputCard_HeaderText">Input your name</h1>
                    <h2 className="inputCard_HintText">This name will be shown to your interlocutor (default: Anonymous)</h2>
                </div>
                <input 
                    className="inputCard_InputName"
                    type="text"
                    placeholder="Your name"
                    maxLength={20}
                    onChange={onChangeNickname}
                    value={nickname}
                />
                <div 
                    className="inputCard_SubmitButton"
                    onClick={() => setLocalStorageValue()}>Submit
                </div>
            </div>
        </div>
    )
}

export default NicknameInputCard