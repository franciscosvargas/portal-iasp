import React from 'react';

import { Container, Logo } from './styles';

import logoIasp from '../../assets/logo.png' 

export default function TopBar() {
	return (
		<Container>
			<Logo src={logoIasp}/>
		</Container>
	);
}
