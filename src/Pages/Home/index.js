import React from 'react';

import Topbar from '../../Components/TopBar'

import { 
	Container, 
	Content, 
	Title, 
	Subtitle, 
	Info, 
	Button,
	Float
} from './styles';

import whats from '../../assets/whatsapp.svg'

const Home = () => (
	<Container>
		<Topbar />

		<Content>
			<Title>Área do</Title>
			<Subtitle>ASSOCIADO</Subtitle>
			<Button href="https://cliente.portaliasp.org">ACESSAR</Button>
		</Content>

		<Float href="https://web.whatsapp.com/send?phone=556392558683&text=Ol%C3%A1">
			<img src={whats} style={{width: 30, height: 30}}/>
		</Float>
	</Container>
);

export default Home;
