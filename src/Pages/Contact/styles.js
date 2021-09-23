import styled from 'styled-components';
import ImageBg from '../../assets/bg.png';
import { Form } from '@unform/web';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	background-image: url(${ImageBg}),linear-gradient(to left, #C3DA8C 0, #437512 100%);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-blend-mode: overlay;
	display:flex;
	flex-direction: column;

	@media (max-width: 1024px) {
		overflow-y: scroll;
		
	}
	
`;

export const Unform = styled(Form)`
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-left: 50px;

	@media (max-width: 1024px) {
		margin-top: 40px;
		margin-left: 0;
		margin-bottom: 50px;
	}
`

export const Content = styled.div`
	height: 100%;
	margin: 0 50px 0 50px;
	display: flex;
	justify-content: space-between;
	
	@media (max-width: 430px) {
		margin: 0 20px;
	}

	@media (max-width: 1024px) {
		flex-direction: column;
		
	}
	
`

export const Title = styled.span`
	font-family: 'Pacifico', cursive;
	color: rgba(255,255,255,0.8);
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
	color: rgba(255,255,255,1);
	font-size: 18px;
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

export const Input = styled.input`
	border: 2px solid #fafafa;
	padding: 10px;
	color: #fafafa;
	background: none;
	font-weight: bold;
	font-size: 20px;

	::placeholder {
		color: rgba(255,255,255,0.6);
	
	}
	margin-top: 20px;
`

export const TextArea = styled.textarea`
	border: 2px solid #fafafa;
	padding: 10px;
	color: #fafafa;
	background: none;
	font-weight: bold;
	font-size: 18px;

	::placeholder {
		color: rgba(255,255,255,0.6);
		font-size: 20px;
	
	}
	margin-top: 20px;
`

export const Wrapper = styled.a`
	display: flex;
	margin-top: 20px;
	align-items: center;

`

export const Icon = styled.img`
	width: 30px;
	height: 30px;
`
export const Float = styled.a`
	position:fixed;
	width:40px;
	height:40px;
	bottom:20px;
	left:40px;
	background-color:rgb(0,230,118);
	color:#FFF;
	border-radius:50px;
	text-align:center;
	display: flex;
	align-items:center;
	justify-content: center;
	
`





