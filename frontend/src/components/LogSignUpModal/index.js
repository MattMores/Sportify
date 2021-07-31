import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormPage from './LogSignUp';
import "./LoginForm.css"

function LoginFormModal() {
	const [isLoginActive, setLoginActive] = useState(true);
	const current = isLoginActive ? "Sign Up" : "Log In";
	const [classList, setClassList] = useState("right");
	const click = () => {
		if (isLoginActive) {
			setClassList("left");
		} else {
			setClassList("right");
		}
		setLoginActive(!isLoginActive);
	};

	return (
		<div className='logreg'>
			<div className='log__login'>
				<div className='container'>
					{isLoginActive && <LoginForm />}
					{!isLoginActive && <SignupFormPage />}
				</div>
				<RightSide current={current} click={click} classList={classList} />
			</div>
		</div>
	);
};

const RightSide = ({ click, current, classList }) => {
	return (
		<div className={`right-side ${classList}`} onClick={click}>
			<div className='inner-container'>
				<div className='text'>{current}</div>
			</div>
		</div>
	);
};

export default LoginFormModal;
