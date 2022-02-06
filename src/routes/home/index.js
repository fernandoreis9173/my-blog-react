import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Meu nome é FERNANDO REIS. Sou Formado em Ciência da Computação no CIESA. Tenho 26 anos, Casado e Tenho um filho 
						lindo chamado Arthur Davi.
						Atualmente Tenho experiência em NodeJS, ReactJS, MaterialUI, PHP, WordPress, Joomla, AngularJS,
						SQL SERVER, MYSQL, SCRUM, KANBAN. Entre Outras. Sou dedicado e gosto de aprender linguagens e Tecnologias novas.
					</div>
					<div class={style.author}>-Mid IT Support Technician at Flex </div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
					Olá você está no meu pequeno Portfólio que Desenvolvi usando ReactJS. Sempre gostei de Tecnologias
					como celulares, videogames, notebooks e computadores. Aos 14 anos comecei a fazer cursos de informática,
					básico ao avançado, pacote do office, inglês, entre outros cursos e palestras voltadas para Tecnologias.
					Daí iniciou minha vontade de estudar e trabalhar na área de tecnologia. No Ensino Médio já
					tinha optado por cursar faculdade na área de tecnologia, precisamente em Ciência da Computação.
				</p>
				<p class={style.bioright}>
					Em 2015 comecei a cursar Ciência da Computação no Centro Universitário De Ensino superior Do
					Amazonas - CIESA. Durante a faculdade dei início no desenvolvimento de pequenos projetos, e isso 
					me levou a gostar ainda mais de desenvolver softwares. E cursos e palestras praticados durante 
					a faculdade me ajudam a seguir em frente e buscar ainda mais conhecimentos. Fiz cursos de desenvolvimento web
					 na fundação paulo feitosa - FPF.
					ReactJS e NodeJS, SQL Server e typescript no Alura.
				</p>
			</div>
			<div>
			
			</div>
		</div> 
		
	);
};



export default Home;
