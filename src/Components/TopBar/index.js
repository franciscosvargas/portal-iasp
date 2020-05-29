import React from 'react'

import { Container, Logo, Right, LinkR, MenuButton, Mobile, LinkMobile } from './styles'

import logoIasp from '../../assets/logo.png' 
import menuIcon from '../../assets/menu.svg'

export default function TopBar() {
	return (
		<Container>
			<Logo src={logoIasp}/>

			<Right>
				<LinkR to="/">INÍCIO</LinkR>
				<LinkR to="#">QUEM SOMOS</LinkR>
				<LinkR to="#">CONVÊNIOS</LinkR>
				<LinkR to="/contato">CONTATO</LinkR>
			</Right>


			<Mobile>
				<LinkMobile href="/">INÍCIO</LinkMobile>
				<LinkMobile href="#">QUEM SOMOS</LinkMobile>
				<LinkMobile href="#">CONVÊNIOS</LinkMobile>
				<LinkMobile href="/contato">CONTATO</LinkMobile>
			</Mobile>

			
		</Container>
	);
}
