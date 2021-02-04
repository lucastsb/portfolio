
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const ExternalLink = () => {
    return (
        <div className='external-container'>
            <div className='external-link'>
                <a href='https://facebook.com/lucas.tabosa.5' rel='noreferrer' target='_blank'>
                    <FontAwesomeIcon className='icon'  icon={faFacebook}></FontAwesomeIcon>
                </a>
            </div>
            <div className='external-link'>
                <a href='https://github.com' rel='noreferrer' target='_blank'>
                    <FontAwesomeIcon className='icon'  icon={faGithub}></FontAwesomeIcon>
                </a>
            </div>
            <div className='external-link'>
                <a href='https://linkedin.com' rel='noreferrer' target='_blank'>
                    <FontAwesomeIcon className='icon'  icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </div>
            <div className='external-link'>
                <a href='https://instagram.com/lucastsb' rel='noreferrer' target='_blank'>
                    <FontAwesomeIcon className='icon' icon={ faInstagram }></FontAwesomeIcon>
                </a>
            </div>
        </div>
    )
}

export default ExternalLink
