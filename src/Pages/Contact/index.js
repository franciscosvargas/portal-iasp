import React from 'react';

import Topbar from '../../Components/TopBar'

import { 
	Container, 
	Content, 
	Title, 
	Subtitle, 
	Info, 
	Button,
	Unform,
	Input, 
	TextArea,
	Wrapper, 
	Icon,
	Float
} from './styles';

import phone from '../../assets/phone.svg'
import whats from '../../assets/whatsapp.svg'
import email from '../../assets/email.svg'

const Home = () => (
	<Container>
		<Topbar />

		<Content>

		<div style={{diplay: 'flex', flexDirection: 'column'}}>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8969604886965!2d-48.31198968564434!3d-10.189022712895687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324ccaff0462af1%3A0xce0717867058ca74!2sQ.%20110%20Sul%20Alameda%2017%2C%202%20-%20Arse%2C%20Palmas%20-%20TO%2C%2077020-152!5e0!3m2!1sen!2sbr!4v1590696533174!5m2!1sen!2sbr" height="270" frameborder="0" allowfullscreen=""  aria-hidden="false" tabindex="0"></iframe>
			
			<Wrapper>
				<Icon src={phone} />
				<Info>(63) 93322-4940</Info>
			</Wrapper>

			<Wrapper href="https://web.whatsapp.com/send?phone=556392558683&text=Ol%C3%A1">
				<Icon src={whats} />
				<Info>Conversar no Whatsapp</Info>
			</Wrapper>

			<Wrapper>
				<Icon src={email} />
				<Info>contato@portaliasp.org</Info>
			</Wrapper>

		</div>

			<Unform>

			
				<Title>Entre em contato</Title>
				<Input placeholder="Nome"></Input>
				<Input placeholder="Email"></Input>
				<Input placeholder="Assunto"></Input>
				<TextArea type="textarea" placeholder="Mensagem"></TextArea>
				<Button onClick={() => alert("Mensagem enviada com sucesso.")}>ENVIAR</Button>
			</Unform>

		</Content>
	</Container>
);

export default Home;
