import React from 'react'

import { Container, Logo, Title, Description, Location } from './styles'

function Benefit({info, ...rest}) {
	return (
		<Container to={`/convenios/${info._id}`}>
			<Logo src={`http://localhost:3001/files/${info.logo}`} />
			<Title>{info.title}</Title>
			<Location>{info.city} - {info.state}</Location>
			<Description>{info.description}</Description>
		</Container>

	);
}

export default Benefit;