import React from 'react';
import './CheckboxLogin.Module.scss'
const CheckboxLogin = () => {
	return (
		<label className='checkbox-login'>
			<input
				type='checkbox'
				className='checkbox-login__input '
			/>
			<p className='checkbox-login__name desc'>save data</p>
		</label>
	)
}

export default CheckboxLogin