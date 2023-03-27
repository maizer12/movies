
import {  useMemo, useRef, useState } from 'react'
import SearchList from '../SearchList'
import ButtonSearch from '../UI/Button/ButtonSearch'
import InputSearch from '../UI/Input/InputSearch'
import './Search.Module.scss'
const Search = () => {
	const searchRef = useRef<HTMLLabelElement | any>()
	const [openList, setOpenList] = useState<boolean>(false)
	const [inputValue, setInputValue] = useState<string>('')
	const listOpen = () => {
		setOpenList(true)
	}
	const listClose = () => {
		setOpenList(false)
	}
	useMemo(() => {
		if (openList) {
			document.body.addEventListener('click', (event: MouseEvent) => {
				const path = event.composedPath()
				if (!path.includes(searchRef.current)) {
					listClose()
				}
			})
		}
	}, [openList])
	return (
		<label ref={searchRef} className='search' onClick={listOpen}>
			<InputSearch setInputValue={setInputValue} />
			<ButtonSearch />
			{/* <SearchList open={openList} request={inputValue} /> */}
		</label>
	)
}

export default Search
