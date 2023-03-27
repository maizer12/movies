import { IMenuItems } from '../../types/IMenu'
import MenuItem from '../MenuItem'
import './Menu.Module.scss'


export const menuItems: IMenuItems[] = [
	{ name: 'Home', link: '' },
	{
		name: 'By genre',
		link: 'by-genre',
		menu: [
			{ name: 'Action', link: 'action' },
			{ name: 'Military', link: 'military' },
			{ name: 'Detective', link: 'detective' },
			{ name: `Children's`, link: `children's` },
		],
	},
	{ name: 'Comedy', link: 'comedy' },
	{ name: 'Cartoons ', link: 'cartoons' },
	{ name: 'Anime', link: 'anime' },
	{ name: 'Actors', link: 'actors' },
	{ name: 'Login/Registration', link: 'Login' },
]
const Menu = () => {
	
	return (
		<nav className='menu'>
			{menuItems.map(e => (
				<MenuItem key={e.name} {...e} />
			))}
		</nav>
	)
}

export default Menu
