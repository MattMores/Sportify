import React, {useState} from 'react'
import { Modal } from '../../context/Modal';
import "./UpdatePage.css"
import UpdatePage from '.';

function UpdatePageModal( {bet} ) {
    const [showModal, setShowModal] = useState(false);

    const handleUpdate = (id) => {
        setShowModal(true)
        // e.stopPropagation()
    }

    return (
        <>
            <button className="auth-btn_row" onClick={() => handleUpdate(bet.id)}>
                Update </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdatePage bet={bet} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default UpdatePageModal;
