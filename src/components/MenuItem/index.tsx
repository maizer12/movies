import {  useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.Module.scss'
import Arrow from '../../assets/img/arrow.svg'
import Dropdown from '../Dropdown'
import { IDropdownItem } from '../../types/IMenu'
import { AppSelector } from '../../hooks/reduxHooks'

interface IProps {
	name: string
	link: string
	menu?: IDropdownItem[]
}
const MenuItem = ({ name, link, menu }: IProps) => {
	const btnRef = useRef<HTMLButtonElement | any>()
	const currentPage = AppSelector(state => state.MoviesSlice.location)
	const [open, setOpen] = useState<boolean>(false)
	const openDropdown = () => {
		setOpen(!open)
	}
	useMemo(()=>{
		if (open) {
			document.body.addEventListener('click', (event: MouseEvent) => {
				const path = event.composedPath()
				if (!path.includes(btnRef.current)) {
					openDropdown()
				}
			})
		}
	},[open])
	if (menu) {
		return (
			<button
				ref={btnRef}
				onClick={openDropdown}
				className={`menu-item ${open ? 'menu-item-active' : ''}`}
			>
				{name}
				<img src={Arrow} alt='arrow' className='menu-item__arrow' />
				<Dropdown currentPage={currentPage} menu={menu} />
			</button>
		)
	} else {
		return (
			<Link
				to={link}
				className={`menu-item ${
					currentPage ===  link ? 'menu-item-active' : ''
				}`}
			>
				{name}
			</Link>
		)
	}
}

export default MenuItem
