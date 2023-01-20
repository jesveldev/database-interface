import './App.css';
import MainMenu from './comps/MainMenu';
import SignUpInterface from './comps/SignUpInterface';
import LoginInterface from './comps/LogInInterface';
import loginLogo from "./img/login-logo.png";
import BackgroundLogo from './comps/BackgroundLogo';
import MainLogo from './img/S.png';
import InternalLogo from './img/logo-interno.png';
import Label from './comps/Label';

import React,{ useState } from 'react';

export default function App() {

  const [state,setState] = useState(0);

  function openLogin(change){
    setState(change);
  }

  function openSignup(change){
    setState(change);
  }

  function backToMenu(change){
    setState(change);
  }

  return (
  	<>

  		<BackgroundLogo
        containerId='logo-container'
  			mainImgSrc={MainLogo}
  			backImgSrc={InternalLogo}
  			mainImgId='menu-logo'
  			backImgId='internal-menu-logo'
  			alt='Official Logo'
  		/>
  		
  		{state===0 ? <MainMenu
                      openLogin={()=>openLogin(1)}
                      openSignup={()=>openSignup(2)}
                    /> :
        (state===1 ? <LoginInterface
                        backToMenu={()=>backToMenu(0)}
                        loginLogo= {loginLogo}
                      />:
          (state===2?<SignUpInterface
                          backToMenu={()=>backToMenu(0)}
                        />:null))
      }

      <Label text='Test Version'/>
  	</>
  );
}