import styled from 'styled-components';
import ImageBg from '../../assets/bg.png';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	background-image: url(${ImageBg}),linear-gradient( 171.8deg,  rgba(5,111,146,1) 20.5%, rgba(6,57,84,1) 78.6% ) ;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-blend-mode: overlay;
	display:flex;
	flex-direction: column;
`;

export const Content = styled.div`
	height: calc(100% - 80px);
	margin: 0 50px 0 50px;
	display: flex;
	flex-direction: column;
	align-self: flex-end;

	@media (max-width: 430px) {
		margin: 0 20px;
	}
`

export const Title = styled.span`
	font-family: 'Pacifico', cursive;
	color: rgba(255,255,255,0.6);
	font-size: 40px;
`

export const Subtitle = styled.span`
	font-family: 'Raleway', sans-serif;
	font-weight: 800;
	color: rgba(255,255,255,0.8);
	font-size: 110px;
	margin-top: -25px;

	@media (max-width: 530px) {
		font-size: 80px;
	}

	@media (max-width: 430px) {
		font-size: 70px;
	}
`

export const Info = styled.span`
	font-family: 'Roboto', sans-serif;
	color: rgba(255,255,255,0.8);
	font-style: italic;
	margin-left: 10px;
`

export const Button = styled.a`
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	border: 2px solid rgba(255,255,255,0.8);
	color: rgba(255,255,255,0.8);
	letter-spacing: 2px;
	margin: 20px 0px 0px auto;
	height: 40px;
	width: 140px;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		background: #fff;
		color: rgba(0,0,0,0.8);
	}
`



