import React, {useState} from 'react'
import { Modal } from '../../context/Modal';
import './SplashPage.css'
import LoginFormModal from '../LogSignUpModal';
import cropped_full_green from'../../assets/cropped_full_green.png'


function SplashPage() {
    const [showModal, setShowModal] = useState(false);


    return (
        <div className="splashPage">
        {/* <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" /> */}
        <img src={cropped_full_green} alt="" />
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
