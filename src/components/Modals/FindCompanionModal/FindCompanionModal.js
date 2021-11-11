import { useState } from 'react'
import './FindCompanionModal.css'

import ModalWindowPortal from '../ModalWindowPortal';
import ButtonModal from '../ButtonModal';
import { useSelector } from 'react-redux';

function FindCompanionModal ({sessionId, findModalActive, toggleFindModal}) {
    const [curIdInput, setCurIdInput] = useState('');
    const {socket} = useSelector(state => state.socket)
    const {waitConfirmationChat} = useSelector(state => state.app)

    function inputHandle (event) {
        const value = event.target.value;
        if (Number(value) || value === '') {
            console.log(Number(value))
            setCurIdInput(value)
        }
    }

    function sendRequestToDialogue () {
        if (socket && socket?.connected) {
            socket.emit('findDialogueById', curIdInput)
        }
    }

    if (findModalActive) {
        return (
            <ModalWindowPortal
                findModalActive={findModalActive}
                toggleFindModal={toggleFindModal}>
                    <h1 className='findModalWindow_MainText mainFont'>Find your friend about Id</h1>
                    <h3 className='findModalWindow_AddittionalText mainFont'>Find out from your interlocutor his ID, and specify it below</h3>
                    <input
                        className='findModalWindow_IDInput mainFont'
                        type='text'
                        onChange={inputHandle}
                        placeholder='Input your friend`s ID' 
                        value={curIdInput}
                        maxLength={9}
                    />
                    {waitConfirmationChat ?
                    <h1>Wait confirmation</h1>
                    : 
                    <ButtonModal
                        action={sendRequestToDialogue}>
                        Send request to dialogue
                    </ButtonModal>
                    }
            </ModalWindowPortal>
        )
    } else {
        return <></>
    }
}

export default FindCompanionModal