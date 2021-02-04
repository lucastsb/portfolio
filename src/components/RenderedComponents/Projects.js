import React from 'react'
import Content from '../template/Content'
import Header from '../template/Header'
import Button from '../template/Button'
import {Link} from 'react-router-dom'
import calc from '../../assets/img/projs/calc.jpg'
import admin from '../../assets/img/projs/admin.jpg'
import converter from '../../assets/img/projs/converter.jpg'
import qrcode from '../../assets/img/projs/qrcode.png'

const Projects = () => {
    return (
        <>
            <Header>
                <div className='title'>Projetos</div>
                <div className='divider'></div>
            </Header>

            <Content >
                <div className='proj-content'>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={calc} alt='calculadora'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={admin} alt='admin'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={converter} alt='conversor'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={qrcode} alt='qrcode'></img>
                    </div>
                </div>
            </Content>
            <Content >
                <div className='proj-content'>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={calc} alt='calculadora'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={admin} alt='admin'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={converter} alt='conversor'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={qrcode} alt='qrcode'></img>
                    </div>
                </div>
            </Content>
            <Content >
                <div className='proj-content'>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={calc} alt='calculadora'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={admin} alt='admin'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={converter} alt='conversor'></img>
                    </div>
                    <div class='proj-pic-container'>
                        <img className='project-img' src={qrcode} alt='qrcode'></img>
                    </div>
                </div>
            </Content>

            <Button>
                <button className='button'>
                    <Link to='Skills'>Voltar</Link>
                </button>
                <button className='button'>
                    <Link to='Contact'>Próximo</Link>
                </button>
            </Button>
        </>
    )
}

export default Projects
