import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLogin from '../../components/UI/Button/ButtonLogin';
import CheckboxLogin from '../../components/UI/Chekbox/CheckboxLogin';
import InputLogin from '../../components/UI/Input/InputLogin';

const Registration = () => {
	return (
		<main className='login'>
			<InputLogin name='Login' />
			<InputLogin name='Mail' />
			<InputLogin name='Password' />
			<CheckboxLogin />
			<ButtonLogin />
			<Link to='/login' className='login__link desc link'>login</Link>
		</main>
	)
};

export default Registration;