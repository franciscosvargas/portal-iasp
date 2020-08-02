import styled from 'styled-components';
import ImageBg from '../../assets/bg.png';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	overflow-y: scroll;

	background-image: url(${ImageBg}),linear-gradient(to left, #1d2671 0, #6190E8 100%);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-blend-mode: overlay;
	display:flex;
	flex-direction: column;
	

`;

export const Content = styled.div`
	margin: 50px 50px 0 50px;
	display: flex;
	flex-grow: 1;
	align-items: center;
	flex-wrap: wrap;

	@media (max-width: 430px) {
		margin: 40px 20px;
	}

`
export const Side = styled.div`
	display: flex;

	
`

export const Title = styled.span`
	font-family: 'Pacifico', cursive;
	color: rgba(255,255,255,0.6);
	font-size: 40px;

	@media (max-width: 320px) {
		font-size: 30px;
	}
`

export const Subtitle = styled.span`
	font-family: 'Raleway', sans-serif;
	font-weight: 800;
	color: rgba(255,255,255,0.8);
	font-size: 100px;
	margin-top: -25px;

	@media (max-width: 530px) {
		font-size: 80px;
	}

	@media (max-width: 430px) {
		font-size: 65px;
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
	text-align: justify;

	@media (min-width: 430px) {
		max-width: 80%;
		margin-top: 10px;
	}
`

export const Button = styled.a`
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	border: 2px solid rgba(255,255,255,0.8);
	color: rgba(255,255,255,0.8);
	letter-spacing: 2px;
	margin: 20px 0px 0px 10px;
	height: 40px;
	padding: 5px 12px;
	display: flex;
	justify-content: center;
	align-items: center;

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


