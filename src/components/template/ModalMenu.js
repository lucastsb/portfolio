import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const ModalMenu = ({ onClose = ()=>{} }) => {
    return (
        <div className='modal-menu'>
            <div className='modal-close' onClick={onClose}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div>
            
            <div className='modal-menu-container'>
                <div className='menu-item'>
                    <Link className='links' to='/About' onClick={onClose}>Sobre Mim</Link>
                </div>
                <div className='menu-item'>
                    <Link className='links' to='/Skills' onClick={onClose}>Habilidades</Link>
                </div>
                <div className='menu-item'>
                    <Link className='links' to='/Projects' onClick={onClose}>Projetos</Link>
                </div>
                <div className='menu-item'>
                    <Link className='links' to='/Contact' onClick={onClose}>Contato</Link>
                </div>
            </div>

        </div>
    )
}

export default ModalMenu