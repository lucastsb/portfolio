import React from 'react'

export const Button = (props) => {
    return (
        <div className='button-container'>
            {props.children}
        </div>
    )
}


export default Button