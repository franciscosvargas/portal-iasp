import styled from 'styled-components';

export const Container = styled.div`
	width: calc(100% - 100px);
	height: 80%;
	padding: 40px 50px 0px 50px;
	display: flex;

	@media (max-width: 845px) {
		width: 100%;
		padding: 40px 0px 0 0px;
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	width: 210px;
	height: 84px;

	@media (max-width: 845px) {
		margin-left: auto;
		margin-right: auto;
	}
`

export const Right = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
	height: 80px;

	@media (max-width: 845px) {
		display: none;
	}

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
`

export const MenuButton = styled.img`
	width: 34px;
	height: 34px;
	display: none;

	@media (max-width: 845px) {
		display: flex;
	}
`

export const Mobile = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 20px;
`

export const LinkMobile = styled.a`
	color: #fff;
	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	font-weight: 300;
	margin-top: 10px;

	:hover {
		font-weight: 400;
		opacity: 0.8;
	}

	@media (min-width: 845px) {
		display: none;
	}
`