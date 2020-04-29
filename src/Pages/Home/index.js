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
			<Subtitle>ASSOCIADO</Subtitle>
			<Info>Solicite sua segunda via de boleto.</Info>
			<Button href="https://cliente.portaliasp.org">ACESSAR</Button>
		</Content>
	</Container>
);

export default Home;
