import React from 'react'

export const Content = (props) => {
    return (
        <div className='content-container'>
            {props.children}
        </div>
    )
}

export default Content