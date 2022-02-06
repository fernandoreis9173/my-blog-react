import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>Fernando Reis</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Sobre Mim</Link>
			<Link activeClassName={style.active} href="/contact">Contatos</Link>
		</nav>
	</header>
); 

export default Header;
