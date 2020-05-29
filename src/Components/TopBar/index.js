import React from 'react'

import { Container, Logo, Right, Link, MenuButton, Mobile, LinkMobile } from './styles'

import logoIasp from '../../assets/logo.png' 
import menuIcon from '../../assets/menu.svg'

export default function TopBar() {
	return (
		<Container>
			<Logo src={logoIasp}/>

			<Right>
				<Link href="/">INÍCIO</Link>
				<Link href="#">QUEM SOMOS</Link>
				<Link href="#">CONVÊNIOS</Link>
				<Link href="/contato">CONTATO</Link>
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
