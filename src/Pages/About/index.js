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
				
					<Subtitle>QUEM SOMOS</Subtitle>
					<Info>O IASP é uma entidade de classe que congrega e representa Servidores Públicos Federais vinculados ao Poder Executivo Federal, com objetivo social de desenvolver ações em benefício de seus associados, que podem ser de natureza social, jurídica, econômica, educacional, cultural, e de bem-estar.</Info>

					<Info>A Entidade tem abrangência nacional e mantém canais de contato ágeis e exclusivos com seus representados e, ainda, possui sede administrativa física localizada no centro do País, em Palmas, capital do Estado do Tocantins.</Info>

					<Info>Conforme dispõe seu Estatuto, o IASP é gerido por uma Diretoria Geral composta por Servidores Públicos Federais eleitos por seus pares, que atua nos limites de suas atribuições e de forma subordinada ao Órgão deliberativo máximo da Entidade, a Assembleia Geral.</Info>

					<Info>Ou seja, o IASP é uma entidade desenhada para oferecer aos Servidores Públicos Federais diversos serviços e facilidades em condições especiais e exclusivas, pois, juntos somos mais fortes.</Info>

				
			</Content>

			
		</Container>
	)
	
};

export default Benefits;
