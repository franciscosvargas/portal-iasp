import styled from 'styled-components';
import ImageBg from '../../assets/bg.png';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	overflow-y: auto;

	background-image: url(${ImageBg}),linear-gradient(to left, #C3DA8C 0, #437512 100%);
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
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	padding-bottom: 100px;

	@media (max-width: 430px) {
		margin: 40px 20px;
	}

`
export const Side = styled.div`
	display: flex;
	width: 100%;
	margin-top: 30px;
	padding-bottom: 50px;
	flex-wrap: wrap;
	justify-content: center;
`

export const Title = styled.span`
	font-family: 'Pacifico', cursive;
	color: rgba(255,255,255,0.6);
	font-size: 40px;

	@media (max-width: 450px) {
		font-size: 20px;
	}
`

export const Subtitle = styled.span`
	font-family: 'Raleway', sans-serif;
	font-weight: 800;
	color: rgba(255,255,255,0.8);
	font-size: 100px;
	text-align: center;

	@media (max-width: 530px) {
		font-size: 60px;
	}

	@media (max-width: 430px) {
		font-size: 45px;
	}

	@media (max-width: 380px) {
		font-size: 35px;
		margin-bottom: 20px;
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
	font-size: 18px;

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

export const List = styled.div`
	max-width: 60%;
	display: flex;
	flex-wrap: wrap;
	margin: 50px 20px;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 530px) {
		max-width: 90%;
	}

	div {
		width: 280px;
		height: 200px;
		border: 2px solid rgba(255,255,255,0.8);
		padding: 20px;
		border-radius: 20px;
		background-color: rgba(0,0,0,0.6);
		margin-top: 15px;
		filter: 'blur(20)';

		

		h2 {
			font-family: 'Roboto', sans-serif;
			font-weight: bold;
			color: rgba(255,255,255,0.8);
			letter-spacing: 2px;
		}

		h4 {
			font-family: 'Roboto', sans-serif;
			color: rgba(255,255,255,0.8);
			margin-top: 10px;
		}

		section {
			margin-top: 15px;
			border-top: 2px solid rgba(255,255,255,0.2);
			font-style: italic;
		}
	}
`




