import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-item'>
                <Link className='links' to='/About'>Sobre Mim</Link>
            </div>
            <div className='menu-item'>
                <Link className='links' to='/Skills'>Habilidades</Link>
            </div>
            <div className='menu-item'>
                <Link className='links' to='/Projects'>Projetos</Link>
            </div>
            <div className='menu-item'>
                <Link className='links' to='/Contact'>Contato</Link>
            </div>
        </div>
    )
}

export default Menu
