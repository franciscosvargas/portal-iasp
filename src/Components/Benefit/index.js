import React from 'react'

import { Container, Logo, Title, Description } from './styles'

function Benefit({info, ...rest}) {
	return (
		<Container to={`/convenios/${info._id}`}>
			<Logo src={`http://api.portaliasp.org/files/${info.logo}`} />
			<Title>{info.title}</Title>
			<Description>{info.description}</Description>
		</Container>

	);
}

export default Benefit;