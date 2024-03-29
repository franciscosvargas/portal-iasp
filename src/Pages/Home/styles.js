import styled from 'styled-components';
import ImageBg from '../../assets/bg.png';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	

	background-image: url(${ImageBg}),linear-gradient(to left, #C3DA8C 0, #437512 100%);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-blend-mode: overlay;
	display:flex;
	flex-direction: column;
`;

export const Content = styled.div`
	margin: auto 50px 100px 50px;
	display: flex;
	flex-direction: column;
	align-self: flex-end;

	@media (max-width: 430px) {
		margin: auto 20px;
	}
`

export const Title = styled.span`
	font-family: 'Pacifico', cursive;
	color: rgba(255,255,255,0.6);
	font-size: 40px;
	margin-bottom: 20px;

	@media (max-width: 600px) {
		font-size: 30px;
		margin-bottom: 30px;
	}
`

export const Subtitle = styled.span`
	font-family: 'Raleway', sans-serif;
	font-weight: 800;
	color: rgba(255,255,255,0.8);
	font-size: 80px;
	margin-top: -25px;

	@media (max-width: 530px) {
		font-size: 60px;
	}

	@media (max-width: 430px) {
		font-size: 45px;
	}

	@media (max-width: 380px) {
		font-size: 55px;
	}

	@media (max-width: 320px) {
		font-size: 50px;
		margin-top: -20px;
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
	margin: 20px 0px 0px 0px;
	height: 40px;
	width: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	:hover {
		background: #fff;
		color: rgba(0,0,0,0.8);
	}
`

export const Float = styled.a`
	position:fixed;
	width:60px;
	height:60px;
	bottom:50%;
	right:40px;
	background-color:rgb(0,230,118);
	color:#FFF;
	border-radius:50px;
	text-align:center;
	display: flex;
	align-items:center;
	justify-content: center;
	
`


