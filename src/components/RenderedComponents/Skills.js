import React from 'react'
import Content from '../template/Content'
import Header from '../template/Header'
import Button from '../template/Button'
import lamp from '../../assets/img/icons/lamp.png'
import {Link} from 'react-router-dom'

const Skills = () => {
    return (
        <>
            <Header>
                <div className='skills-title'>
                   Mindset e Habilidades
                </div>
                <div className='divider'></div>
            </Header>

            <Content >
            <div className='skills-content'>
                        <div className='skills-picture'>
                            <img src={lamp} alt='Lucas Tabosa'></img>
                        </div>

                        <div className='skills-content-text'>
                        <p className='quote'>
                         "A curiosidade e a produção do conhecimento no homem muitas vezes supera qualquer prazer carnal, distinguindo-o dessa forma de qualquer animal."
                         <br/>- Thomas Hobbes<br/><br/>
                         </p>
                         <p>
                         Movido por uma curiosidade incessante e um profundo desejo
                         de gerar impacto real na vida das pessoas, resolvendo problemas,
                         trazendo mais comodidade, entretenimento, aproximar pessoas, espalhar conhecimento
                         e tudo mais que o mundo da tecnologia tem pra oferecer. Assim eu comecei a me aventurar
                         na programação. <br/><br/>Tendo passado por todas as etapas iniciais, de fundamentação, construindo desde simples
                         calculadoras e conversores de moeda, utilizando HTML/CSS e Javascript, até o ponto
                         de conseguir desenvolver coisas mais complexas como um sistema de cadastro (CRUD) utilizando ReactJS,
                         VueJS ou Angular, optando por focar um pouco mais no ReactJS (no qual todo esse site foi construído), mantendo uma base firme de conhecimento de outras tecnologias.
                         <br/><br/>
                         Além disso, posso eu mesmo criar/editar utilizando ferramentas como Photoshop.<br/><br/>
                         E ser capaz de me comunicar fluentemente em inglês e com um nível intermediário de mandarim!<br/><br/>
                     </p>
                        </div>
            </div>
            </Content>

            <Button>
                <button className='button'>
                    <Link to='About'>Voltar</Link>
                </button>
                <button className='button'>
                    <Link to='Projects'>Próximo</Link>
                </button>
            </Button>
        </>
    )
}

export default Skills
