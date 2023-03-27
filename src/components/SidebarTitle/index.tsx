import React from 'react';
import './SidebarTitle.Module.scss'
interface IProps {
	children:string
}
const SidebarTitle = ({ children }: IProps) => {
	return <h5 className='sidebar-title name'>{children}</h5>
}

export default SidebarTitle;