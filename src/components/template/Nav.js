import React from 'react'
import ProfilePic from './ProfilePic'
import Menu from './Menu'
import ExternalLink from './ExternalLink'

import Modal from './Modal'

const Nav = () => {
    return (
        <div className='nav-container'>
                <ProfilePic/>
                
                <div className='author-info'>
                    <div className='author-title'>
                        <h3 className='a-title'>Lucas Tabosa</h3>
                    </div>
                    <div className='author-subtitle'>
                        <p className='a-subtitle'>Desenvolvedor Font-End</p>
                    </div>
                </div>

                <ExternalLink/>
                
                <Menu/>
                
                <Modal/>
                
              
        </div>
    )
}

export default Nav
