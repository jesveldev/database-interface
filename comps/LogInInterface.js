import '../stylesheets/LogInInterface.css';
import '../stylesheets/Forms.css';

export default function LogInInterface({ backToMenu, loginLogo }){
	return (
		<section id='login-interface'>
			<img src={ loginLogo } id='logo' alt='Log in logo'/>
			
			<form>
				<input
					type='text'
					name='username'
					required
					maxlength='10'
					minlength='5'
					autocomplete='off'
					placeholder='Username'
				/>

				<input
					type='password'
					name='password'
					required
					maxlength='10'
					minlength='5'
					autocomplete='off'
					placeholder='Password'
				/>

				<button
					id='login'
					className='login-button'
				>Join</button>
			</form>

			<button
				id='back'
				className='login-button'
				onClick={ backToMenu }
			>Back</button>
		</section>
	);
}