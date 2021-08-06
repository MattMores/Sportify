import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import "./UpdateReviewsModal.css"
import UpdateReview from '.';

function UpdateReviewsModal( {review}) {
    const [showModal, setShowModal] = useState(false);

    const handleReviewUpdate = (id) => {
        setShowModal(true)
        // e.stopPropagation()
    }

    return (
        <>
            <button className="auth-btn_row" onClick={() => handleReviewUpdate(review.id)}>
                Update </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateReview review={review} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default UpdateReviewsModal
