import React from 'react'

const Header = (props) => {
    return (
        <div className='header-container'>
            {props.children}
        </div>
    )
}

export default Header






// <div className='title-container'>
//                  <h1 className='header-title'>{props.children}</h1>
//             </div>
//             <div className='divider-container'>
//                  <hr className='divider'/>
//             </div>