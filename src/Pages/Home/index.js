import React from 'react';

import Topbar from '../../Components/TopBar'

import { Container, Logo, Message } from './styles';

import logoIasp from '../../assets/logo.png';

const Home = () => (
	<Container>
		<Logo src={logoIasp}/>
		<Message>O portal será lançado em algumas horas</Message>
	</Container>
);

export default Home;
