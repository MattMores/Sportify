import React, {useState} from 'react'
import { Modal } from '../../context/Modal';
import './SplashPage.css'
import LoginFormModal from '../LogSignUpModal';

function SplashPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="splashPage">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />
            <div className="login__modal" onClick={() => setShowModal(true)}>
                Log In To Sportify </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginFormModal />
                </Modal>
            )}
        </div>
    )
}

export default SplashPage;
