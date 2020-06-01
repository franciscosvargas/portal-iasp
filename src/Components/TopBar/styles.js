import styled from 'styled-components';

export const Container = styled.div`
	width: calc(100% - 100px);
	height: 80%;
	padding: 40px 50px 0px 50px;
	display: flex;
	flex-direction: column;
	@media (max-width: 845px) {
		width: calc(100% - 40px);
		padding: 40px 20px 0 15px;
	}
`;

export const Logo = styled.img`
	width: 210px;
	height: 84px;
`

export const Right = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
	height: 80px;
`
export const Mobile = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: column;
	text-align: right;
`

export const Link = styled.a`
	color: #fff;
	font-family: 'Roboto', sans-serif;
	margin-left: 30px;
	font-size: 20px;
	font-weight: 300;
	:hover {
		font-weight: 400;
		opacity: 0.8;
	}
	@media (max-width: 845px) {
		display: none;
	}
`

export const LinkM = styled.a`
	color: #fff;
	font-family: 'Roboto', sans-serif;
	margin-top: 20px;
	font-size: 20px;
	font-weight: 300;
	
	:hover {
		font-weight: 400;
		opacity: 0.8;
	}
	
`

export const MenuButton = styled.img`
	width: 34px;
	height: 34px;
	display: none;
	@media (max-width: 845px) {
		display: flex;
	}
`