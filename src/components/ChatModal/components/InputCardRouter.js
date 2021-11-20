import React from 'react';
import InputCardChatModal from './InputCardChatModal';
import InputCardChatRejected from './InputCardChatRejected';

function InputCardRouter({ isRejected }) {
    return <>{isRejected ? <InputCardChatRejected /> : <InputCardChatModal />}</>;
}

export default InputCardRouter;
