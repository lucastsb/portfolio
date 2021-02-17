import React, {useState} from 'react'
import proj1Thumb from '../assets/images/thumbs/an-thumb.png'
import proj2Thumb from '../assets/images/thumbs/poke-thumb.png'
import proj3Thumb from '../assets/images/thumbs/weather-app-thumb.png'
import proj1Full from '../assets/images/projs/react-an-crud.png'
import proj2Full from '../assets/images/projs/pokedex.png'
import proj3Full from '../assets/images/fulls/weather-app-full.png'



const Main = () => {

	const [section2, setSection] = useState('section-two-display-none')

	const showSectionTwo = () => {
		setSection('section-two-display')
	}


    return (
        <div id="main">

				
					<section id="one">
						<header className="major">
							<h2>Olá, eu sou o Lucas!</h2>
						</header>
						<p>“Medir o progresso da programação por linhas de código é como medir o progresso da construção 
                                        de aeronaves em termos de peso.”
                                        - Bill Gates</p>

                                        <p>O interesse pela programação surgiu há pouco mais de um ano, 
                                        movido inicialmente, pela vontade de saber como algumas coisas 
                                        do nosso cotidiano funcionam. Em seguida veio a vontade de estar 
                                        do "outro lado", construindo coisas e impactando, de todas as 
                                        melhores formas que a tecnologia possibilita, a vida das pessoas.</p>


								<section id='two' className={section2}>
											<p>
										{/* "A curiosidade e a produção do conhecimento no homem muitas vezes supera qualquer prazer carnal, distinguindo-o dessa forma de qualquer animal."
										- Thomas Hobbes <br/><br/> */}

										Movido por uma curiosidade incessante e um profundo desejo de gerar impacto real na vida das pessoas, resolvendo
										problemas, trazendo mais facilidade e praticidade
										entretenimento, aproximar pessoas, espalhar conhecimento e tudo mais que o mundo da tecnologia tem pra oferecer
										Assim eu comecei a me aventurar na programação.
										Tendo passado por todas as etapas iniciais, de fundamentação, construindo desde simples calculadoras
										conversores de moeda, com HTML/CSS/Javascript, até desenvolver coisas mais complexas como um sistema de cadastro
										(CRUD), Single Page Aplications, etc. Utilizando ReactJS, VueJS ou Angular, optando por focar um pouco mais no 
										<strong> ReactJS</strong> (no qual todo esse site foi construído), mantendo uma base firme de conhecimento de outras tecnologias.
										<br/><br/>Além disso, posso eu mesmo criar/editar utilizando ferramentas como Photoshop.
										E ser capaz de me comunicar fluentemente em inglês e com um nível intermediário de mandarim!
											</p>
							</section>
						<ul className="actions">
							<li><a className="button" onClick={showSectionTwo}>Saiba Mais</a></li>
						</ul>
					</section>
				
					<section id="three">
						<h2>Projetos Recentes:</h2>
						<div class="row">
							<article class="col-6 col-12-xsmall work-item">
								<a href={proj1Full} class="image fit thumb"><img src={proj1Thumb} alt="" /></a>
								<h3>Sistema de Gerenciamento - <a href='https://lucastsb.github.io/react-crud-frontend/index.html#/' target='_blank' rel='noreferrer'>  
										 Clique Aqui
									</a>
								</h3>
								<p>SPA crud simples, com navegação funcionando e pronto para integração com banco de dados</p>
							</article>
							<article class="col-6 col-12-xsmall work-item">
								<a href={proj2Full} class="image fit thumb"><img src={proj2Thumb} alt="" /></a>
								<h3>Pokédex em React - <a href='https://lucastsb.github.io/pokedex/index.html' target='_blank' rel='noreferrer'>  
										 Clique Aqui
									</a></h3>
								<p>Pokédex da primeira geração de pokémons, cards com informações consultadas de API</p>
							</article>
							<article class="col-6 col-12-xsmall work-item">
								<a href={proj3Full} class="image fit thumb"><img src={proj3Thumb} alt="" /></a>
								<h3>Pesquisa de Temperatura no Mundo - <a href='https://react-weather-app-eybbpslue.vercel.app' target='_blank' rel='noreferrer'>  
										 Clique Aqui
									</a></h3>
								<p>App simples pra saber a temperatura em várias cidades ao redor do mundo</p>
							</article>

							{/* a medida q for adicionando projetos relevantes, basta duplicar e alterar as imagens */}
							
						</div>
						<ul class="actions">
							<li><a target='_blank' rel='noreferrer' href="https://github.com/lucastsb/lucastsb.github.io" class="button">Mais projetos no Github</a></li>
						</ul>
					</section>

					<section id="four">
						<h2>Entre em Contato</h2>
						<p>Me envie um email ou fique a vontade para entrar em contato pelas redes sociais!</p>
						<div className="row">
							<div className="col-8 col-12-small">
								<form method="post" action="#">
									<div className="row gtr-uniform gtr-50">
										<div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Nome" /></div>
										<div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
										<div className="col-12"><textarea name="message" id="message" placeholder="Mensagem" rows="4"></textarea></div>
									</div>
								</form>
								<ul className="actions">
									<li>
											<a className='button' href="mailto:lucastsb6@gmail.com">Enviar</a>
									</li>
								</ul>
							</div>
							<div className="col-4 col-12-small">
								<ul className="labeled-icons">
									<li>
										<h3 className="icon solid fa-home"></h3>
										R. Cônego de Castro, 2383<br />
										Fortaleza, Ceará<br />
										Brasil
									</li>
									<li>
										<h3 className="icon brands fa-whatsapp"></h3>
										+55 85 998575259
									</li>
									<li>
										<h3 className="icon solid fa-envelope"></h3>
										<a href="mailto:lucastsb6@gmail.com">lucastsb6@gmail.com</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
        </div>
    )
}

export default Main
