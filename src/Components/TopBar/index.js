import React, { useState } from 'react'

import { Container, Logo, Right, LinkP, MenuButton, LinkM, Mobile } from './styles'

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
					<LinkP to="/">INÍCIO</LinkP>
					<LinkP to="/quem-somos">QUEM SOMOS</LinkP>
					<LinkP to="/convenios">BENEFÍCIOS</LinkP>
					<LinkP to="/contato">CONTATO</LinkP>

					<MenuButton onClick={() => setMobile(!mobile)} src={mobile ? closeIcon : menuIcon} />
				</Right>
			</div>

			{mobile && (
				<Mobile>
						<LinkM to="/">INÍCIO</LinkM>
						<LinkM to="/quem-somos">QUEM SOMOS</LinkM>
						<LinkM to="/convenios">BENEFÍCIOS</LinkM>
						<LinkM to="/contato">CONTATO</LinkM>
				</Mobile>
			)}


		</Container>
	);
}