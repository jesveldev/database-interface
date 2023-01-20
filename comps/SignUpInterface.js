import '../stylesheets/SignUpInterface.css';
import '../stylesheets/Forms.css';
import React, { useState } from 'react';

export default function SignUpInterface({ backToMenu }){

	const [signupData, setSignupData] = useState({
		user:'',
		pass:'',
		confirmUser:'',
		confirmPass:''
	})

	function typingCredentials(event,element){
		if(element===1){

			setSignupData({
				user:event.target.value,
				pass:signupData.pass,
				confirmUser:signupData.confirmUser,
				confirmPass:signupData.confirmPass
			});

		}else if(element===2){

			setSignupData({
				user:signupData.user,
				pass:event.target.value,
				confirmUser:signupData.confirmUser,
				confirmPass:signupData.confirmPass
			});

		}else if(element===3){

			setSignupData({
				user:signupData.user,
				pass:signupData.pass,
				confirmUser:event.target.value,
				confirmPass:signupData.confirmPass
			});

		}else if(element===4){

			setSignupData({
				user:signupData.user,
				pass:signupData.pass,
				confirmUser:signupData.confirmUser,
				confirmPass:event.target.value
			});

		}

	}

	return (
		<section id="signup-interface">

			<h3 className="signup-label">Please, insert your credentials</h3>

			<form>
				<input
					type="text"
					name="signup-username" 
					required
					maxlength="10"
					minlength="5"
					autocomplete="off"
					placeholder="Username"
					onChange={(e)=>typingCredentials(e,1)}
				/>

				<input
					type="password"
					name="signup-password" 
					required
					maxlength="10"
					minlength="6"
					autocomplete="off"
					placeholder="Password"
					onChange={(e)=>typingCredentials(e,2)}
				/>

				<input
					type="text"
					name="signup-confirm-username"
					required
					maxlength="10"
					minlength="5"
					autocomplete="off"
					placeholder="Confirm username"
					onChange={(e)=>typingCredentials(e,3)}
				/>

				<input
					type="password"
					name="signup-confirm-password"
					required
					maxlength="10"
					minlength="5"
					autocomplete="off"
					placeholder="Confirm password"
					onChange={(e)=>typingCredentials(e,4)}
				/>

				<button id="signup" className="signup-button">Sign up</button>
			</form>

			<button
				id="signup-back"
				className="signup-button"
				onClick={ backToMenu }
			>Back</button>
		</section>
	);
}