import React from 'react'
import Content from '../template/Content'
import Header from '../template/Header'
import Button from '../template/Button'
import {Link} from 'react-router-dom'
import insta from '../../assets/img/icons/instagram.png'
import wpp from '../../assets/img/icons/whatsapp.png'
import tele from '../../assets/img/icons/telegram.png'

const Contact = () => {
    return (
            <>
            <Header>
                <div className='title'>Fala comigo!</div>
                <div className='divider'></div>
            </Header>
                <div className='content-container-um'>

            {/* form: user & email */}
            <Content>
                <div className='form-container'>
                    <div className='form-name'>
                        <input className='name' type='text' placeholder='Seu nome'></input>
                    </div>
                    <div className='form-email'>
                        <input className='email' type='email' placeholder='Seu e-mail'></input>
                    </div>
                </div>
            </Content>

            {/* form subject */}
            <Content>
                    <div className='form-subject'>
                        <input className='subject' type='text' placeholder='Assunto'></input>
                    </div>
            </Content>

            {/* text-area: message */}
            <Content>
                <div className='message'>
                    <textarea className='your-message' placeholder='Sua Mensagem' rows='15'></textarea>
                </div>
            </Content>
            </div> 
            
                <div className='contact-container'>
                    <div className='contact'>
                        <div className='social-icon'>
                           <a href='https://instagram.com/lucastsb' taget='_blank'>
                               <img src={insta} alt='instagram logo'></img>
                            </a>
                        </div>
                        <div className='social-contact'>@lucastsb</div>
                    </div>
                    <div className='contact'>
                        <div className='social-icon'>
                           <img src={wpp} alt='whatsapp logo'></img>
                        </div>
                        <div className='social-contact'>+55 85 998575259</div>
                    </div>
                    <div className='contact'>
                        <div className='social-icon'>
                           <img src={tele} alt='telegram logo'></img>
                        </div>
                        <div className='social-contact'>+55 85 998575259</div>
                    </div>
                </div>
            
            <Content>
                <div className='message-warning'>
                    <h4> O serviço de mensagem ainda não foi implementado <p className='edit'>(este acima é apenas um modelo)</p>, 
                        fique a vontade para entrar em contato pelo instagram, whatsapp ou telegram<br/><br/>
                        <br/><br/>Nos vemos por aí!
                    </h4>
                </div>
            </Content>

        
            <Button>
                <button className='button'>
                    <Link to='Projects'>Voltar</Link>
                </button>
                <button disabled className='button'>
                  Enviar {/*<Link to='About'>Enviar</Link> */}
                </button>
            </Button>


        </>
    )
}

export default Contact
