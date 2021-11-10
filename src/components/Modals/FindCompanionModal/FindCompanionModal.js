import { useState } from 'react'
import './FindCompanionModal.css'

import ModalWindowPortal from '../ModalWindowPortal';
import ButtonModal from '../ButtonModal';
import { useSelector } from 'react-redux';

function FindCompanionModal ({sessionId, isActive, setIsActive, permissionToCloseModal}) {
    const [curIdInput, setCurIdInput] = useState('');
    const {socket} = useSelector(state => state.socket)

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

    if (isActive) {
        return (
            <ModalWindowPortal
                isActive={isActive}
                setIsActive={setIsActive}
                permissionToCloseModal={permissionToCloseModal}>
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
                    <ButtonModal
                        action={() => sendRequestToDialogue()}>
                        Send request to dialogue
                    </ButtonModal>
            </ModalWindowPortal>
        )
    } else {
        return <></>
    }
}

export default FindCompanionModal