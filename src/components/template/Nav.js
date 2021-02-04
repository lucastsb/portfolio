import React from 'react'
import ProfilePic from './ProfilePic'
import Menu from './Menu'
import ExternalLink from './ExternalLink'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <div className='nav-container'>
                <ProfilePic/>
                
                <div className='author-info'>
                    <div className='author-title'>
                        <h3 className='a-title'>Lucas Tabosa</h3>
                    </div>
                    <div className='author-subtitle'>
                        <p className='a-subtitle'>Desenvolvedor Web</p>
                    </div>
                </div>

                <ExternalLink/>
                <Menu/>

                <div className='toggle-btn-container'>
                    <FontAwesomeIcon className='bars' icon={faBars}></FontAwesomeIcon>
                </div>
        </div>
    )
}

export default Nav
