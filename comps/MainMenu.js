import '../stylesheets/MainMenu.css';
import Button from './Button';
import ModalWindow from './ModalWindow';
import React, { useState } from 'react';

export default function App({ openLogin, openSignup }) {

  const [modalWindowState,setModalWindowState] = useState(false);

  function openAbout(){
  	setModalWindowState(true);
  }

  function closeAbout(){
  	setModalWindowState(false);
  }

  return (
	<section id="main-menu">
		<Button
			buttonId='main-menu-button-login'
			buttonClass='main-menu-button'
			buttonFunction={ openLogin }
		>Log in</Button>

		<Button
			buttonId='main-menu-button-signup'
			buttonClass='main-menu-button'
			buttonFunction={ openSignup }
		>Sign up</Button>

		<Button
			buttonId='main-menu-button-about'
			buttonClass='main-menu-button'
			buttonFunction={openAbout}
		>About</Button>

		{
			modalWindowState?<ModalWindow P1='Developer: Jesús Velásquez' P2='Version: Beta'
								buttonFunc={closeAbout}/>:null
		}
	</section>
  );
}