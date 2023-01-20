import '../stylesheets/ModalWindow.css';
import Button from './Button';

export default function ModalWindow({ P1, P2, buttonFunc }) {
  return (
  	<div className='modal-window'>
  		<section>
  			<p className='modal-window-paragraph'>{ P1 }</p>
  			<p className='modal-window-paragraph'>{ P2 }</p>
  			<Button
  				buttonClass='close-modal-window'
  				buttonFunction={ buttonFunc }
  			>Close</Button>
  		</section>
  	</div>
  );
}