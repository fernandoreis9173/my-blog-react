import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contate-Me</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>Hi!</div>
					<div>Se Você gostou do que viu e quer tirar dúvidas ou conversar melhor, mande
						 um email ou whatsapp</div>
						 <div>&nbsp;</div>
					<div>
						<a href="https://www.linkedin.com/in/fernando-reis-79b643144/" target="_blank">LINKEDIN</a><br/><br/>
						<a href="https://github.com/fernandoreis9173" target="_blank">GITHUB</a><br/><br/>
						
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
			<object data="../assets/fernando.pdf" type="application/pdf"><p>CURRICULUM</p></object>
		</div>
	);
};

export default photographs;