import React from 'react'
import Content from '../template/Content'
import Header from '../template/Header'
import Button from '../template/Button'
import photo from '../../assets/img/about-me-pic5.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <Header>
                <div className='title'>Olá, eu sou o Lucas!</div>
                <div className='divider'></div>
            </Header>

            <Content >
                        <div className='content-picture'>
                            <img src={photo} alt='Lucas Tabosa' className='photo'></img>
                        </div>

                        <div className='about-content'>
                            <p>
                                        “Medir o progresso da programação por linhas de código é como medir o progresso da construção 
                                        de aeronaves em termos de peso.”<br/>
                                        - Bill Gates<br/><br/>

                                        O interesse pela programação surgiu há pouco mais de um ano, 
                                        movido inicialmente, pela vontade de saber como algumas coisas 
                                        do nosso cotidiano funcionam. Em seguida veio a vontade de estar 
                                        do "outro lado", construindo coisas e impactando, de todas as 
                                        melhores formas que a tecnologia possibilita, a vida das pessoas.
                            </p>
                        </div>
            </Content>

            <Button>
                <button className='button'>
                    <Link to='Skills'>Próximo</Link></button>
            </Button>
        </>
    )
}


export default About