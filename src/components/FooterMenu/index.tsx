import { Link } from 'react-router-dom'
import { AppSelector } from '../../hooks/reduxHooks'
import { menuItems } from '../Menu'
import './FooterMenu.Module.scss'
const FooterMenu = () => {
	const currentPage = AppSelector(state => state.MoviesSlice.location)
	return (
		<nav className='footer-menu'>
			<h6 className='footer-menu__name text'>Menu</h6>
			{menuItems.map(e =>
				!e.menu ? (
					<Link
						key={e.name}
						to={e.link}
						className={`footer-menu__item text ${
							currentPage ===  e.link ? 'menu-item-active' : ''
						}`}
					>
						{e.name}
					</Link>
				) : (
					''
				)
			)}
		</nav>
	)
}

export default FooterMenu
