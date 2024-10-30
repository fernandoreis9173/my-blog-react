import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contate-me para mais</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>Ola!</div>
					<div>Se Você gostou do que viu e quer tirar dúvidas ou conversar melhor,<br/>
					por favor mande um email ou whatsapp</div>
					<div>&nbsp;</div>
					<div>
						<a href="https://www.linkedin.com/in/fernando-reis-79b643144/" target="_blank">LINKEDIN</a><br /><br />
						<a href="https://github.com/fernandoreis9173" target="_blank">GITHUB</a><br /><br />
						<a href="https://myreactfernandoreis.netlify.app/" target="_blank">OUTRO PORTIFÓLIO</a><br /><br />
						<a href="../assets/FernandoDev.pdf" target="_blank"><p>CURRICULUM</p></a>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
						<a href="https://web.whatsapp.com/send/?phone=5592999845104&text=Adorei+seu+Portfolio" style="position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#FFF;border-radius:50px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888; z-index:1000;" target="_blank">
						<i style="margin-top:16px" class="fa fa-whatsapp"></i>
						</a>

					</div>
					<div>&nbsp;</div>
					<div>Abraços 🍻</div>
				</p>
				<form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<input type="text" name="name" placeholder="Nome" required />
					</p>
					<p>
						<input type="email" name="email" placeholder="E-Mail" required />
					</p>
					<p>
						<textarea name="message" placeholder="Mensagem" />
					</p>
					<p>
						<button type="submit">Enviar</button>
					</p>
				</form>
			</div>

		</div>
	);
};

export default photographs;