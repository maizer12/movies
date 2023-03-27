import { useCallback } from 'react'
import './InputSearch.Module.scss'
import debounce from 'lodash.debounce'
interface IProps {
	setInputValue: React.Dispatch<React.SetStateAction<string>>
}
const InputSearch = ({ setInputValue }: IProps) => {
	const useWrite = useCallback(
		debounce((event: React.ChangeEvent<HTMLInputElement>) => {
			setInputValue(event.target.value)
		}, 150),[]
	)
	return (
		<>
			<input
				placeholder='Site search'
				onChange={useWrite}
				type='text'
				className='input-search'
			/>
		</>
	)
}

export default InputSearch
