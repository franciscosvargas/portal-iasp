import React from 'react'

import { Container, Logo, Title, Description, Location } from './styles'

function Benefit({info, ...rest}) {
	return (
		<Container to={`/convenios/${info._id}`}>
			<Logo src={`https://api.portaliasp.org/files/${info.logo}`} />
			<Title>{info.title}</Title>
			<Location>{info.city} - {info.state}</Location>
			<Description>{info.description}</Description>
		</Container>

	);
}

export default Benefit;