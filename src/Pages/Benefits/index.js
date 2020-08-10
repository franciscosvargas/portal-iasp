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
					<Info>O Instituto de Assistência ao Servidor Público, inscrito no CNPJ sob o nº 32.199.404/0001-42, em parceria com o Sindicato Nacional dos Servidores Federais Da Educação Básica, Profissional E Tecnológica - SINASEFE, através da sua Seção Sindical IFTO, inscrita no CNPJ sob nº 07.251.501/0001-90, disponibiliza diversos convênios com empresas e entidades fornecedoras de produtos e prestação de serviços, que possibilitam descontos aos seus associados e também aos dependentes, mediante a apresentação da carteira de associado. </Info>

					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						{/* <Button href="https://cliente.portaliasp.org">COMO FUNCIONA?</Button> */}
						<Button href="https://cliente.portaliasp.org">ACESSAR MEUS DADOS</Button>
					</div>

				<Side>
					{benefits.map(benefit => (
						<Benefit key={benefit._id} info={benefit} />
					))}

					{benefits == 0 && <Info>NÃO HÁ CONVÊNIOS CADASTRADOS</Info>}
				</Side>

				

				
			</Content>

			
		</Container>
	)
	
};

export default Benefits;
