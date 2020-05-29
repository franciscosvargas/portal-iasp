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
			<Button href="https://cliente.portaliasp.org">ACESSAR</Button>
		</Content>
	</Container>
);

export default Home;
