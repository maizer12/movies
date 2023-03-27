import { AppSelector } from '../../hooks/reduxHooks'
import SidebarCollectionItem from '../SidebarCollectionItem'
import SidebarTitle from '../SidebarTitle'
import SkeletonItemSidebar from '../Skeletons/SkeletonItemSidebar'
import './SidebarCollection.Module.scss'
const massiveFake = [...new Array(5)]
const SidebarCollection = () => {
	const movies = AppSelector(state => state.MoviesSlice.popularMovies)
	
	return (
		<div className='sidebar-collection'>
			<SidebarTitle>Recently uploaded movies.</SidebarTitle>
			<ul className='name__items'>
				{movies
					? movies.map((e, i) =>
							i < 5 ? <SidebarCollectionItem key={e.id} {...e} /> : ''
					  )
					:massiveFake.map((e, i) => <SkeletonItemSidebar key={i}/> )}
			</ul>
		</div>
	)
}

export default SidebarCollection
