import React from 'react'
import Content from '../template/Content'
import Header from '../template/Header'
import Button from '../template/Button'
import {Link} from 'react-router-dom'

import editor from '../../../src/assets/img/projs/html-editor.png'
import login from '../../../src/assets/img/projs/login-an-app.png'
import pokedex from '../../../src/assets/img/projs/pokedex.png'
import reactAnCrud from '../../../src/assets/img/projs/react-an-crud.png'
import reactCalc from '../../../src/assets/img/projs/react-calculator.png'
import signup from '../../../src/assets/img/projs/sign-up-form.png'
import tipCalc from '../../../src/assets/img/projs/tip-calculator.png'
import ToDo from '../../../src/assets/img/projs/to-do-list.png'




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
                                <a href='https://lucastsb.github.io/pokedex/index.html' target='_blank' rel='noreferrer'>
                                    <img className='project-img' src={pokedex} alt='calculadora'></img>
                                </a>
                                <div className='proj-pic-title'>
                                    <a href='https://lucastsb.github.io/pokedex/index.html' target='_blank' rel='noreferrer'>
                                        <h4>Pokedex Simples</h4>
                                    </a>
                                </div>
                            </div>

                            <div class='proj-pic-container'>
                                <a href='https://lucastsb.github.io/tip-calculator/calc.html' target='_blank' rel='noreferrer'>
                                    <img className='project-img' src={tipCalc} alt='admin'></img>
                                </a>
                                <div className='proj-pic-title'>
                                <a href='https://lucastsb.github.io/tip-calculator/calc.html' target='_blank' rel='noreferrer'>
                                    <h4>Calculadora Simples</h4>
                                    </a>
                                </div>
                            </div>

                            <div class='proj-pic-container'>
                                <a href='https://lucastsb.github.io/react-crud-frontend/index.html' target='_blank' rel='noreferrer'>
                                    <img className='project-img' src={reactAnCrud} alt='conversor'></img>
                                </a>
                                <div className='proj-pic-title'>
                                    <a href='https://lucastsb.github.io/react-crud-frontend/index.html' target='_blank' rel='noreferrer'>
                                        <h4>CRUD em React</h4></a></div>
                            </div>

                            <div class='proj-pic-container'>
                                <a href='https://lucastsb.github.io/realtime-html-editor/index.html' target='_blank' rel='noreferrer'>
                                    <img className='project-img' src={editor} alt='qrcode'></img>
                                </a>
                                <div className='proj-pic-title'>
                                <a href='https://lucastsb.github.io/realtime-html-editor/index.html' target='_blank' rel='noreferrer'>
                                    <h4>Editor de HTML</h4></a>
                                </div>
                            </div>
                            
                </div>
            </Content>
            <Content >
                <div className='proj-content'>
                    <div class='proj-pic-container'>
                        <a href='https://lucastsb.github.io/react-calculator/index.html' target='_blank' rel='noreferrer'>
                            <img className='project-img' src={reactCalc} alt='calculadora'></img>
                        </a>
                        <div className='proj-pic-title'>
                        <a href='https://lucastsb.github.io/react-calculator/index.html' target='_blank' rel='noreferrer'>
                            <h4>Calculadora React</h4></a></div>
                    </div>
                    
                    <div class='proj-pic-container'>
                        <a href='https://lucastsb.github.io/sign-up-form/index.html' target='_blank' rel='noreferrer'>
                            <img className='project-img' src={signup} alt='admin'></img>
                        </a>
                        <div className='proj-pic-title'>
                        <a href='https://lucastsb.github.io/sign-up-form/index.html' target='_blank' rel='noreferrer'>
                            <h4>Form. Login (CSS)</h4></a></div>
                    </div>
                    
                    <div class='proj-pic-container'>
                        <a href='https://lucastsb.github.io/an-app/index.html' target='_blank' rel='noreferrer'>
                            <img className='project-img' src={login} alt='conversor'></img>
                        </a>
                        <div className='proj-pic-title'>
                        <a href='https://lucastsb.github.io/an-app/index.html' target='_blank' rel='noreferrer'>
                            <h4>Login</h4></a></div>
                    </div>
                    
                    <div class='proj-pic-container'>
                        <a href='https://lucastsb.github.io/to-do-list/index.html' target='_blank' rel='noreferrer'>
                            <img className='project-img' src={ToDo} alt='qrcode'></img>
                        </a>
                        <div className='proj-pic-title'>
                        <a href='https://lucastsb.github.io/to-do-list/index.html' target='_blank' rel='noreferrer'>
                            <h4>Lista de Tarefas</h4></a></div>
                    </div>
                </div>
            </Content>
            <div className='proj-warning'><h4> Os projetos acima ainda não foram adaptados para dispositivos móveis, aconselho visualizar em um desktop/notebook</h4></div>
            {/* <Content >
                <div className='proj-content'>
                    <div class='proj-pic-container'>
                        <a href=''><img className='project-img' src={} alt='calculadora'></img></a>
                    </div>
                    <div class='proj-pic-container'>
                        <a href=''><img className='project-img' src={} alt='admin'></img></a>
                    </div>
                    <div class='proj-pic-container'>
                        <a href=''><img className='project-img' src={} alt='conversor'></img></a>
                    </div>
                    <div class='proj-pic-container'>
                        <a href=''><img className='project-img' src={} alt='qrcode'></img></a>
                    </div>
                </div>
            </Content> */}

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
