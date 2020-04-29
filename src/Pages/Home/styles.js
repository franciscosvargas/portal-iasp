import styled from 'styled-components';
import ImageBg from '../../assets/bg.png';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	background-image: url(${ImageBg}),linear-gradient( 171.8deg,  rgba(5,111,146,1) 20.5%, rgba(6,57,84,1) 78.6% ) ;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-blend-mode: overlay;
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

`;

export const Logo = styled.img`
	width: 246px;
	
`

export const Message = styled.span`
	color: #fff;
	margin-top: 20px;
	font-size: 25px;
	display: flex;
	padding: 20px;
	text-align: center;
`


