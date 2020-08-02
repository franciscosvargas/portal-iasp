import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
					

				

				
			</Content>

			
		</Container>
	)
	
};

export default Benefits;
