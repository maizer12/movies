import React from 'react'
import { Link } from 'react-router-dom'
import { IDropdownItem } from '../../types/IMenu'
import './Dropdown.Module.scss'


interface IProps {
	menu: IDropdownItem[]
	currentPage:string
}

const Dropdown = ({ menu, currentPage }: IProps) => {
	return (
		<div className='dropdown'>
			{menu.map(e => (
				<Link
					to={e.link}
					key={e.name}
					className={`dropdown__item ${
						currentPage === '/' + e.link ? 'dropdown-item-active' : ''
					}`}
				>
					{e.name}
				</Link>
			))}
		</div>
	)
}

export default Dropdown
