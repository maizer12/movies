import React from 'react';
import './ButtonSidebar.Module.scss'
interface IProps  {
	children:string
}
const ButtonSidebar = ({children}:IProps) => {
	return (
		<button className='button-sidebar'>
			{children}
		</button>
	);
};

export default ButtonSidebar;