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
			<Title>Bem vindo(a) ao</Title>
			<Subtitle>Instituto de Assistência ao Servidor Público</Subtitle>
			<Button href="https://cliente.portaliasp.org">ACESSAR ÁREA DO ASSOCIADO</Button>
		</Content>

		
	</Container>
);

export default Home;
