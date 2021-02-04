import React from 'react'
import photo from '../../assets/img/profile.png'


const ProfilePic = () => {
    return (
        <div className='picture-container'>
            <img className='photo' src={photo} alt='Lucas Tabosa - Foto' />
        </div>
    )
}

export default ProfilePic
