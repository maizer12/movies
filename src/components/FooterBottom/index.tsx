import React from 'react'
import { Link } from 'react-router-dom'
import Socials from '../Socials'
import './FooterBottom.Module.scss'
const FooterBottom = () => {
	return (
		<div className='footer-bottom'>
			<div className='footer-bottom__copy text'>
				© All rights reserved MovieDB 2023
			</div>
			<Socials />
			<Link to='/' className='footer-bottom__link link text'>
				Privacy Policy
			</Link>
		</div>
	)
}

export default FooterBottom
