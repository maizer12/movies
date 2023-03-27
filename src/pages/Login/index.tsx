import './Login.Module.scss'
import InputLogin from '../../components/UI/Input/InputLogin';
import CheckboxLogin from '../../components/UI/Chekbox/CheckboxLogin';
import ButtonLogin from '../../components/UI/Button/ButtonLogin';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<main className='login'>
			<InputLogin name='Login'/>
			<InputLogin name='Password'/>
			<CheckboxLogin/>
			<ButtonLogin/>
			<Link to='/registration' className='login__link text link'>Registration</Link>
		</main>
	);
};

export default Login;