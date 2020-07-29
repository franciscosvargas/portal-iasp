import React,{ useEffect, useState } from 'react';

import Topbar from '../../Components/TopBar'

import { 
	Container, 
	Content, 
	Title, 
	Subtitle, 
	Info, 
	Button,
	Float,
	Side
} from './styles';

import Benefit from '../../Components/Benefit'

import whats from '../../assets/whatsapp.svg'

const Benefits = () => {
	const [ benefits, setBenefits ] = useState([])

	useEffect(() => {
		fetch('https://api.portaliasp.org/benefits')
			.then(async response => setBenefits(await response.json()))
	}, [])

	return (
		<Container>
			<Topbar />

			<Content>
				
					<Subtitle>CONVÊNIOS</Subtitle>
					<Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pretium tortor, et aliquam mauris. Nulla facilisi. Aenean fermentum est vitae augue lacinia pharetra. Cras aliquet, nisl at malesuada pretium, ante ligula imperdiet leo, sed ullamcorper tellus massa vitae quam. Proin a urna purus. Integer lacinia dictum urna at mollis.</Info>

					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						<Button href="https://cliente.portaliasp.org">COMO FUNCIONA?</Button>
						<Button href="https://cliente.portaliasp.org">ACESSAR MEUS DADOS</Button>
					</div>

				<Side>
					{benefits.map(benefit => (
						<Benefit key={benefit._id} info={benefit} />
					))}
				</Side>

				

				
			</Content>

			
		</Container>
	)
	
};

export default Benefits;
