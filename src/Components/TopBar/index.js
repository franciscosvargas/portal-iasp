import React from 'react'

import { Container, Logo, Right, Link, MenuButton } from './styles'

import logoIasp from '../../assets/logo.png' 
import menuIcon from '../../assets/menu.svg'

export default function TopBar() {
	return (
		<Container>
			<Logo src={logoIasp}/>

			<Right>
				<Link href="/">INÍCIO</Link>
				<Link href="/">QUEM SOMOS</Link>
				<Link href="/">CONVÊNIOS</Link>
				<Link href="/">CONTATO</Link>

				<MenuButton src={menuIcon} />
			</Right>

			
		</Container>
	);
}
