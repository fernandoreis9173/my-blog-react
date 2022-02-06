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
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
		<a href="https://wa.me/5592999845104?text=Adorei%20seu%20Portfolio" style="position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#FFF;border-radius:50px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888;
  			z-index:1000;" target="_blank">
		<i style="margin-top:16px" class="fa fa-whatsapp"></i>
		</a>
		</div>
	);
};

export default photographs;