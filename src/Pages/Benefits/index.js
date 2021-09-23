import React,{ useEffect, useState } from 'react';

import Topbar from '../../Components/TopBar'

import { 
	Container, 
	Content, 
	Subtitle, 
	Info, 
	List
} from './styles';

import Araguaina from './ArquivosDental/ARAGUAINA.json'
import Colinas from './ArquivosDental/COLINAS.json'
import Dianopolis from './ArquivosDental/DIANOPOLIS.json'
import Gurupi from './ArquivosDental/GURUPI.json'
import Palmas from './ArquivosDental/PALMAS.json'
import Paraiso from './ArquivosDental/PARAISO.json'
import PedroAfonso from './ArquivosDental/PEDRO_AFONSO.json'

import Select from 'react-select'

const Benefits = () => {
	const [ city, setCity ] = useState(null)
	const [ locals, setLocals ] = useState(null)

	const options = [
		{ value: 'ARAGUAINA', label: 'Araguaína', file: Araguaina},
		{ value: 'COLINAS', label: 'Colinas', file: Colinas},
		{ value: 'DIANOPOLIS', label: 'Dianópolis', file: Dianopolis },
		{ value: 'GURUPI', label: 'Gurupi', file: Gurupi },
		{ value: 'PALMAS', label: 'Palmas', file: Palmas },
		{ value: 'PARAISO', label: 'Paraíso', file: Paraiso },
		{ value:  'PEDRO_AFONSO', label: 'Pedro Afonso', file: PedroAfonso}
	]
	

	return (
		<Container>
			<Topbar />

			<Content>
				
					<Subtitle>Plano de Saúde</Subtitle>
					<Info>O Instituto de Assistência ao Servidor Público – IASP oportuniza aos Servidores Federais, plano de Saúde vinculado à Unimed São do Rio Preto com  valores exclusivos. A modalidade de cobertura ofertada é de nível nacional e possui duas redes de atendimento: acomodação coletiva e acomodação individual.</Info>
					<Info>Para contratar e ter mais informações sobre coberturas e demais especificações, entre em contato nos telefones 063 9 9255-86-83 e 063 3322-2700.</Info>

					<div style={{marginTop: 50}}></div>
					<Subtitle>Plano Odontológico</Subtitle>
					<Info>O Instituto de Assistência ao Servidor Público – IASP oportuniza aos Servidores Federais, plano odontológico vinculado a Bradesco Seguros, com modalidades e valores exclusivos. A cobertura ofertada é de nível nacional e possui duas redes de atendimento: Padrão DOC  e Premium TOP.</Info>

					<div style={{marginTop: 20}}></div>
					<Info><b>Confira o Guia de Profissionais Cadastrados para sua Localidade:</b></Info>


					<div style={{marginTop: 20, width: 250, fontFamily: "Roboto"}}>
						<Select 
							options={options}
							placeholder="Selecione uma cidade"
							value={city}
							onChange={val => {
								setCity(val)
								setLocals(val.file)
							}} />
					</div>


					{locals && (
						
						<List>
							{
								locals['Table 1'].map((item, index) => (
									<div key={index}>
										<h2>{item.CREDENCIADO}</h2>
										<h4>{item.ESPECIALIDADE} - CRO: {item.CRO}</h4>

										<section>

											<h4>{item['ENDEREÇO']} - {item['BAIRRO']} </h4>
											<h4>{item.TELEFONE}</h4>

									</section>

								</div>
								))
							}
							
						</List>
					)}

				
					

				
			</Content>

			
		</Container>
	)
	
};

export default Benefits;
