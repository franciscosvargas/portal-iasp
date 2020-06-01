import React, { useState } from 'react'

import { Container, Logo, Right, Link, MenuButton, LinkM, Mobile } from './styles'

import logoIasp from '../../assets/logo.png' 
import menuIcon from '../../assets/menu.svg'
import closeIcon from '../../assets/close.svg'

export default function TopBar() {
	const [mobile, setMobile] = useState(false)

	return (
		<Container>
			<div style={{display: 'flex', width: '100%'}}>
				
				<Logo src={logoIasp}/>

				<Right>
					<Link href="/">INÍCIO</Link>
					<Link href="/">QUEM SOMOS</Link>
					<Link href="/">CONVÊNIOS</Link>
					<Link href="/">CONTATO</Link>

					<MenuButton onClick={() => setMobile(!mobile)} src={mobile ? closeIcon : menuIcon} />
				</Right>
			</div>

			{mobile && (
				<Mobile>
						<LinkM href="/">INÍCIO</LinkM>
						<LinkM href="/">QUEM SOMOS</LinkM>
						<LinkM href="/">CONVÊNIOS</LinkM>
						<LinkM href="/">CONTATO</LinkM>
				</Mobile>
			)}


		</Container>
	);
}