import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import ModalMenu from './ModalMenu'
import {Link} from 'react-router-dom'




function Modal() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return(
        <div className='toggle-btn-container'>
        <button onClick={() => setIsModalVisible(true)} className='open-btn-modal'>
           <FontAwesomeIcon className='bars' icon={faBars}><Link to='ModalMenu'/></FontAwesomeIcon>
        </button>

            {isModalVisible ? <ModalMenu onClose={()=>setIsModalVisible(false)} /> : null}


       </div>
    )
}

export default Modal
