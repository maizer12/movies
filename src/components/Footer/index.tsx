import React from 'react'
import './Footer.Modules.scss'
import Logo from '../../assets/img/Logo.svg'
import FooterMenu from '../FooterMenu'
import FooterBottom from '../FooterBottom'
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<div className='footer__columns'>
					<img src={Logo} alt='logo' className='footer__logo' />
					<FooterMenu />
					<div className='footer-colum'>
						<h5 className='footer-colum__name text'>About us</h5>
						<p className='footer-colum__text text'>
							Knowing everything about movies, you want to share it with others.
							Share films, trailers, characters, and news on social media, rate
							movies, and discuss them with friends and followers! <br /> <br />
							<br />
							Add interesting movies, nearby cinemas, and favorite actors to
							"Favorites". The system will show all related news and new
							trailers, suggest when you can buy a movie ticket for an exciting
							premiere. Join us!
						</p>
					</div>
				</div>
				<FooterBottom/>
			</div>
		</footer>
	)
}

export default Footer
