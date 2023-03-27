import './InputLogin.Module.scss'
interface IProps {
	name: string
}
const InputLogin = ({ name }: IProps) => {
	return (
		<label className='login-input'>
			<h5 className='login-input__name name'>{name}</h5>
			<input
				type='text'
				className='login-input__input text'
				placeholder={'Enter ' + name.toLowerCase()}
			/>
		</label>
	)
}

export default InputLogin
