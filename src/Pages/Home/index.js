import React from 'react';

import Topbar from '../../Components/TopBar'

import { 
	Container, 
	Content, 
	Title, 
	Subtitle, 
	Info, 
	Button,
} from './styles';

const Home = () => (
	<Container>
		<Topbar />

		<Content>
			<Title>Área do</Title>
			<Subtitle>CLIENTE</Subtitle>
			<Info>Solicite sua segunda via de boleto, carteirinha e muito mais.</Info>
			<Button href="https://cliente.portaliasp.org">ACESSAR</Button>
		</Content>
	</Container>
);

export default Home;
