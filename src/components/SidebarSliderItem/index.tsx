import React from 'react'
import './SidebarSliderItem.Module.scss'
import ImgItem from '../../assets/img/sidebar-slider/1.jpg'
import ButtonSidebar from '../UI/Button/ButtonSidebar'
const SidebarSliderItem = () => {
	return (
		<li className='sidebar-slider-item'>
			<div className='sidebar-slider-item__image'>
				<img
					src={ImgItem}
					alt='collection'
					className='sidebar-slider-item__img'
				/>
			</div>
			<div className='sidebar-slider-item__content'>
				<h5 className='sidebar-slider-item__name'>
					The best series of 2015-2023
				</h5>
				<ButtonSidebar>Watching</ButtonSidebar>
			</div>
		</li>
	)
}

export default SidebarSliderItem
