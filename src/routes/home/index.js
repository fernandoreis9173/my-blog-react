import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {


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
						Sou Formado em Ciência da Computação no CIESA. Tenho 27 anos, Casado e Tenho um filho.
						Atualmente Tenho experiência em NodeJS, ReactJS, Asp.Net Core, Bootstrap, MaterialUI, PHP, Laravel, WordPress, Joomla,
						AngularJS, SQL SERVER, MYSQL, SCRUM, KANBAN e entre outras. <br/>
						Tenho Pós-Graduação em Ciência de Dados (UNIASSELVE) e estou cursando Pós-Graduação Desenvolvimento de
						software para alto desempenho (UEA).
					</div>
					<div class={style.author}>-Sr IT Support Technician at Flex </div>
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
					me levou a gostar ainda mais de desenvolver softwares. Cursos e palestras me ajudaram a seguir em frente e buscar ainda mais conhecimentos.
					Fiz curso de desenvolvimento web na fundação paulo feitosa - FPF.
					ReactJS e NodeJS, SQL Server, typescript, ASP.NET Core no Alura.<br/>
						<hr/>
						Meu maior objetivo em 2024 é aprender inglês e para isso já estou imerso ao idioma cursando inglês na UEA e APPs diariamente.
						 Lendo, ouvindo, e escrevendo Textos em inglês, Ouvindo músicas, assistindo series e praticando diariamente, segundo os poliglotas esse é o caminho.
				</p>
			</div>
			<div>
			
			</div>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
		<a href="https://wa.me/5592999845104?text=Adorei%20seu%20Portfolio" style="position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#FFF;border-radius:50px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888;
  			z-index:1000;" target="_blank">
		<i style="margin-top:16px" class="fa fa-whatsapp"></i>
		</a>
		</div> 
		
	);
};
 


export default Home;
