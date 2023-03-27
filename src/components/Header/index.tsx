import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.svg'
import Menu from '../Menu'
import Search from '../Search'
import './Header.Module.scss'
const Header = () => {
	return (
		<header className='header'>
			<div className='header__inner container'>
				<Link to='/'>
					<img src={Logo} alt='Logo' className='header__logo' />
				</Link>
				<Menu />
				<Search />
			</div>
		</header>
	)
}

export default Header
