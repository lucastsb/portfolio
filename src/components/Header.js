import React from 'react'
import profile from '../assets/images/avatar.png'

const Header = () => {
    return(
		<>
			<header id="header">
				<div className="inner">
					<a href="#" className="image avatar"><img src={profile} alt="" /></a>
					<h1><strong> Lucas Tabosa </strong></h1>
                    <p> Desenvolvedor Front-End</p>
				
				<ul className="icons">
					<li><a href="https://linkedin.com/in/lucas-tabosa-7621731b1" target='_blank' rel='noreferrer' className="icon brands fa-linkedin">
						<span className="label">Linkedin</span></a></li>
					<li><a href="https://github.com/lucastsb" target="_blank" rel='noreferrer' className="icon brands fa-github">
						<span className="label">Github</span></a></li>
					<li><a href="https://facebook.com/lucas.tabosa.5" target='_blank' rel='noreferrer' className="icon brands fa-facebook">
						<span className="label">Facebook</span></a></li>
					<li><a href="https://instagram.com/lucastsb" target='_blank' rel='noreferrer' className="icon brands fa-instagram">
						<span className="label">Instagram</span></a></li>
				</ul>
				
			</div>
			</header>
			
	</>
    )
}


export default Header