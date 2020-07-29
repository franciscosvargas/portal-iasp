import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
	width: 235px;
	background: #fafafa;
	opacity: 0.9;
	padding: 25px;
	cursor: pointer;
	border-radius: 15px;
	min-height: 200px;
	display: flex;
	flex-direction: column;
	transition: opacity 200ms;
	margin: 10px;

	:hover{
		opacity: 1;
	}
`;

export const Title = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 23px;
	color: #333;
	margin-top: 20px;
`;

export const Description = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: 17px;
	text-align: justify;
	color: #333;
	opacity: 0.9;
	margin-top: 10px;
`

export const Logo = styled.img`
	width: 100px;
	height: 100px;

	border-radius: 10px;
`
